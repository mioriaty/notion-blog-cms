import { NextResponse } from 'next/server';
import { getPages } from '@/libs/notion/notion-service';

export async function GET() {
  try {
    const posts = await getPages();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Notion' }, { status: 500 });
  }
}
