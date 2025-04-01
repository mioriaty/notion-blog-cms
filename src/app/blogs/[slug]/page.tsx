import { getPageBySlug, getPageContent } from '@/data-access/api/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
//Plugins
import hljsPlugin from '@notion-render/hljs-plugin';
import { notFound } from 'next/navigation';

import { Post } from '@/libs/components/post';
import { notionClient } from '@/libs/notion/client';
import { wrapServerApi } from '@/libs/utils/wrap-server-api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const paramsData = await params;
  const post = await wrapServerApi(() => getPageBySlug(paramsData.slug));

  //Redirect to not found page!
  if (!post) notFound();

  const content = await wrapServerApi(() => getPageContent(post.id));

  if (!content) notFound();

  const notionRenderer = new NotionRenderer({
    client: notionClient
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...content);

  return (
    <Post
      title={post.properties.Name.title[0]?.plain_text || 'Untitled'}
      bannerImage={post.properties.banner_image?.files[0]?.file?.url ?? ''}
      bannerImageWidth={800}
      bannerImageHeight={400}
      content={html}
    />
  );
}
