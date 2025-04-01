'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/libs/utils/class-names';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
  loadingClassName?: string;
}

export function LazyImage({ src, alt, fallbackSrc = '', className, loadingClassName, ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(fallbackSrc || src);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    setImgSrc(fallbackSrc || src);
  }, [src, fallbackSrc]);

  return (
    <div className={cn('relative overflow-hidden', isLoading && 'animate-pulse bg-gray-200')}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        className={cn(className, isLoading && loadingClassName)}
        onLoad={() => {
          setIsLoading(false);
          setImgSrc(src);
        }}
        onError={() => {
          setIsLoading(false);
          if (fallbackSrc && imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
