import { BlogsList } from '@/features/blogs/blogs';
import Link from 'next/link';

export default function NewsSection() {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-3xl border">
      <div className="grid md:grid-cols-[1fr,2fr] gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Latest News</h2>
            <p className="mt-4 text-muted-foreground">A place to share my thoughts and ideas</p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-300 to-blue-600 hover:opacity-90 transition-opacity"
          >
            View all blogs
          </Link>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <BlogsList limit={3} />
        </div>
      </div>
    </div>
  );
}

const newsItems = [
  {
    category: 'Category',
    date: 'June 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    category: 'Category',
    date: 'June 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    category: 'Category',
    date: 'June 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  }
];
