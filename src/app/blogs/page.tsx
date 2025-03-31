import { getPages } from '@/data-access/api/notion';
import { INotionPageResponse } from '@/data-access/models/notion-page';
import Image from 'next/image';
import Link from 'next/link';

export default async function PostsPage() {
  const response = await getPages();
  const posts = response.results as INotionPageResponse[];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const title = post.properties.Name.title[0]?.plain_text || 'Untitled';
          const slug = post.properties.slug.rich_text[0]?.plain_text;
          const bannerImage = post.properties.banner_image?.files[0]?.file?.url ?? '';

          return (
            <Link href={`/blogs/${slug}`} key={post.id} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                {bannerImage && (
                  <div className="relative h-48 w-full">
                    <Image src={bannerImage} alt={title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-400 hover:underline">Read more →</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
