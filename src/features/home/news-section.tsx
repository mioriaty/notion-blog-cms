import { BlogsList } from '@/features/blogs/blogs';
import Link from 'next/link';

export default function BlogsSection() {
  return (
    <div className="max-w-7xl mx-auto sm:p-10 p-4 bg-white rounded-3xl border">
      <div className="grid md:grid-cols-[1fr,2fr] gap-4">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Latest Blogs</h2>
            <p className="mt-4 text-muted-foreground">A place to share my thoughts and ideas</p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-primary"
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
