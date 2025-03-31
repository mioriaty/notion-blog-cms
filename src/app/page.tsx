import { HomeHero } from '@/features/home/home-hero';
import { UserList } from '@/features/users/user-list';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <HomeHero />

        <div className="w-full mt-8 border-t pt-8">
          <UserList />
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/shadcn-ui/ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </a>
      </footer>
    </div>
  );
}
