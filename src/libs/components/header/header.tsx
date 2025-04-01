'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/utils/class-names';

export default function Header() {
  // const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-reading/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <img className="h-8 w-auto" src="/strawberry.png" alt="Flowers & Saints Logo" />
          </Link>
        </div>
        <div className="flex gap-x-6">
          <Link
            href="/"
            rel="noopener noreferrer"
            className={cn(
              'text-sm font-semibold leading-6 transition-colors',
              pathname === '/' ? 'text-primary font-bold' : 'text-foreground hover:text-primary'
            )}
          >
            Home
          </Link>
          <Link
            href="/blogs"
            rel="noopener noreferrer"
            className={cn(
              'text-sm font-semibold leading-6 transition-colors',
              pathname === '/blogs' ? 'text-primary font-bold' : 'text-foreground hover:text-primary'
            )}
          >
            Blogs
          </Link>
        </div>
        {/* <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div> */}
      </nav>
    </motion.header>
  );
}
