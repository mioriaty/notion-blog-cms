import { BlogsList } from '@/features/blogs/blogs';

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold  mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogsList />
      </div>
    </div>
  );
}
