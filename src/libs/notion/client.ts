import { Client } from '@notionhq/client';

// Initialize the Notion client with the API token from environment variables
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});
