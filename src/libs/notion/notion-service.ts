import 'server-only';

import { Client } from '@notionhq/client';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';
import { INotionPageResponse } from '@/data-access/models/notion-page';

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(async () => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  return response;
});

export const getPageContent = cache(async (pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then(res => res.results as BlockObjectResponse[]);
});

export const getPageBySlug = cache(async (slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then(res => res.results[0] as INotionPageResponse | undefined);
});
