import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface NewsItemProps {
  category: string;
  date: string;
  title: string;
  href: string;
}

export function NewsCard({ category, date, title, href }: NewsItemProps) {
  return (
    <Link href={href} className="block group p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium capitalize text-orange-600">{category}</p>
          </div>
          <h3 className="font-medium text-blue-600">{title}</h3>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        <div className="p-1 rounded-full group-hover:bg-white transition-colors">
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900" />
        </div>
      </div>
    </Link>
  );
}
