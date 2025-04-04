import envConfig from '@/config/env.config';
import { INotionPageResponse } from '@/data-access/models/notion-page';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { notionClient } from '@/libs/notion/client';

export const getPages = async () => {
  const response = await notionClient.databases.query({
    database_id: envConfig.NEXT_PUBLIC_NOTION_DATABASE_ID
  });

  return response;
};

export const getPageContent = async (pageId: string) => {
  return notionClient.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
};

export const getPageBySlug = async (slug: string) => {
  return notionClient.databases
    .query({
      database_id: envConfig.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug
        }
      }
    })
    .then((res) => res.results[0] as INotionPageResponse | undefined);
};
