import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/**'
      },
      {
        hostname: 'placehold.jp',
        pathname: '/**'
      },
      {
        hostname: 'localhost',
        pathname: '/**'
      },
      {
        hostname: 'placehold.co',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
