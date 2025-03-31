import { Client } from '@notionhq/client';

// Initialize the Notion client with the API token from environment variables
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default notion;
