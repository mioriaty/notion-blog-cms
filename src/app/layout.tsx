import { baseOpenGraph } from '@/shared/metadata';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Be_Vietnam_Pro as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import NextjsTopLoader from 'nextjs-toploader';

import Header from '@/libs/components/header/header';
import { ScrollToTop } from '@/libs/components/scroll-to-top/scroll-to-top';
import { TanstackProvider } from '@/libs/providers/tanstack-provider';
import { cn } from '@/libs/utils/class-names';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900']
});

const textFont = localFont({
  src: [
    {
      path: '../../public/fonts/times-new-roman-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/times-new-roman-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/times-new-roman-italic.ttf',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--font-text'
});

export const metadata: Metadata = {
  title: "Duong's Blog",
  description: 'My inner world',
  openGraph: {
    ...baseOpenGraph
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn('min-h-screen font-sans antialiased background-reading', fontSans.variable, textFont.variable)}
      >
        <NextjsTopLoader height={2} showSpinner={false} color="hsl(var(--primary))" />
        <TanstackProvider>
          <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <ScrollToTop />
          </NextThemesProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
