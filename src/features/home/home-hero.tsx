import React from 'react';
import Image from 'next/image';
import { Button } from '@/libs/components/ui/button';

export function HomeHero() {
  return (
    <div className="flex flex-col gap-8 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Welcome to your Next.js application
        </h1>
        <p className="text-muted-foreground mb-6">
          This project is structured with a data-access architecture, making it easier to manage
          state, API calls, and UI components separately.
        </p>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
