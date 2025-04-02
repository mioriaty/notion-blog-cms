'use client';

import { BlogsList } from '@/features/blogs/blogs';

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <p className="text-muted-foreground">You kept me like a secret but I kept you like an oath</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogsList />
      </div>
    </div>
  );
}
