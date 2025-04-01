'use client';

import { INotionPageResponse } from '@/data-access/models/notion-page';
import { useGetPagesQuery } from '@/data-access/queries/use-pages-';
import { Loader2 } from 'lucide-react';

import { AsyncComponent } from '@/libs/components/async-component/async-component';
import { NewsCard } from '@/libs/components/card/card';
import { NewsCardLoading } from '@/libs/components/card/card-loading';

export const BlogsList = ({ limit }: { limit?: number }) => {
  const { data: response, isError, isLoading, isSuccess, isFetched } = useGetPagesQuery();
  const posts = (response?.results ?? []) as INotionPageResponse[];
  const limitedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <AsyncComponent
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess || isFetched}
      Loading={Array.from({ length: 3 }).map((_, index) => (
        <NewsCardLoading key={index} />
      ))}
      Success={limitedPosts.map((post) => {
        const title = post.properties.Name.title[0]?.plain_text || 'Untitled';
        const slug = post.properties.slug.rich_text[0]?.plain_text;
        const published_date = post.properties.published_date.date.start;
        const tags = (post.properties.tags.multi_select?.map((tag: any) => tag.name) || []).join(', ');

        return <NewsCard key={post.id} href={`/blogs/${slug}`} category={tags} date={published_date} title={title} />;
      })}
    />
  );
};
