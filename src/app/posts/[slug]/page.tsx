import { getPageContent, getPageBySlug, notionClient } from '@/libs/notion/notion-service';
import { NotionRenderer } from '@notion-render/client';
import { notFound } from 'next/navigation';

//Plugins
import hljsPlugin from '@notion-render/hljs-plugin';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { Post } from '@/libs/components/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const paramsData = await params;
  const post = await getPageBySlug(paramsData.slug);

  //Redirect to not found page!
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...content);

  return (
    <Post
      title={post.properties.Name.title[0]?.plain_text || 'Untitled'}
      bannerImage={post.properties.banner_image?.files[0]?.file?.url ?? ''}
      bannerImageWidth={400}
      bannerImageHeight={400}
      content={html}
    />
  );
}
