'use client';

import { ArrowLeftIcon, BackpackIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { LazyImage } from '@/libs/components/lazy-image/lazy-image';
import { Button } from '@/libs/components/ui/button';

interface PostProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
}

export function Post(props: PostProps) {
  const { title, content, bannerImage, bannerImageHeight, bannerImageWidth } = props;
  const router = useRouter();

  const handleBackToBlogsList = () => {
    router.push('/blogs');
  };

  return (
    <article className="w-full mb-10 flex flex-col items-center pt-10 pl-3 pr-3">
      <div className="w-full max-w-3xl mb-6">
        <Button size={'sm'} variant="link" onClick={handleBackToBlogsList}>
          <ArrowLeftIcon />
          Back to Blogs
        </Button>
      </div>
      <h1 className="text-6xl font-black mb-8">{title}</h1>
      {bannerImage && (
        <LazyImage
          alt="Blog Image"
          src={bannerImage}
          width={bannerImageWidth}
          height={bannerImageHeight}
          className="[width: 800px]! max-w-full"
        />
      )}
      <div
        className="text-xl mt-4 max-w-3xl prose prose-p:text-black prose-headings:text-black prose-p:font-serif prose-headings:font-sans prose-blockquote:border-black prose-blockquote:font-serif prose-hr:border-rose-500"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
