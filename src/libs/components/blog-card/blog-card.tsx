import { ArrowUpRight, CheckCircle, Clock, Loader } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { Badge } from '@/libs/components/ui/badge';
import { cn } from '@/libs/utils/class-names';

export interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  href: string;
  status: string;
}

export const BlogCard: FC<BlogCardProps> = ({ category, date, title, href, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Not started':
        return 'bg-slate-300 text-slate-700';
      case 'In progress':
        return 'bg-primary text-primary-foreground';
      case 'Done':
        return 'bg-green-200 text-green-700';
      default:
        return 'bg-slate-200 text-slate-700';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'Not started':
        return <Clock className="h-3.5 w-3.5" />;
      case 'In progress':
        return <Loader className="h-3.5 w-3.5" />;
      case 'Done':
        return <CheckCircle className="h-3.5 w-3.5" />;
      default:
        return <Clock className="h-3.5 w-3.5" />;
    }
  };

  return (
    <Link href={href} className="block group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium capitalize text-blue-700">{category}</p>
          </div>
          <h3 className="font-medium text-primary">{title}</h3>
          <div className="flex justify-between items-center gap-2 !mt-3">
            <Badge className={cn('rounded-full flex items-center gap-1 font-medium', getStatusColor())}>
              {getStatusIcon()}
              {status}
            </Badge>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="p-1 rounded-full group-hover:bg-white transition-colors">
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:rotate-45 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
