import envConfig from '@/config/env.config';

export const baseOpenGraph = {
  locale: 'en_US',
  alternateLocale: ['vi_VN'],
  type: 'website',
  siteName: "Duong's Blog",
  images: [
    {
      url: `${envConfig.NEXT_PUBLIC_URL}/banner.jpeg`
    }
  ]
};
