import Image from 'next/image';

interface PostProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
}

export function Post(props: PostProps) {
  const { title, content, bannerImage, bannerImageHeight } = props;

  return (
    <article className="w-full mb-10 flex flex-col items-center pt-10 pl-3 pr-3">
      <h1 className="text-6xl font-black text-black mb-8">{title}</h1>
      <Image
        alt="Blog Image"
        src={bannerImage}
        // width={bannerImageWidth}
        width={'800'}
        height={bannerImageHeight}
        className="[width: 800px]! max-w-full"
      />
      <div
        className="text-xl mt-4 max-w-3xl prose prose-p:text-black prose-headings:text-black"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
