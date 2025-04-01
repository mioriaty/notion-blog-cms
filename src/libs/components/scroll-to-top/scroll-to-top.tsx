'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/libs/components/ui/button';
import { cn } from '@/libs/utils/class-names';

interface ScrollToTopProps {
  className?: string;
  threshold?: number; // Pixel threshold before showing the button
  smooth?: boolean; // Whether to use smooth scrolling
}

export function ScrollToTop({ className, threshold = 300, smooth = true }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Initialize visibility
    toggleVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Button
      size="icon"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full transition-opacity duration-300 bg-blue-700',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-5 text-white" />
    </Button>
  );
}
