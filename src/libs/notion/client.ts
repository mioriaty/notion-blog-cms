import envConfig from '@/config/env.config';
import { Client } from '@notionhq/client';

// Initialize the Notion client with the API token from environment variables
export const notionClient = new Client({
  auth: envConfig.NEXT_PUBLIC_NOTION_TOKEN
});
