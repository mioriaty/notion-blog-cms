import { ArrowUpRight } from 'lucide-react';

export function NewsCardLoading() {
  return (
    <div className="block group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-xs font-medium capitalize text-orange-600">
              <div className="h-2 w-2 bg-orange-600 rounded-full" />
            </div>
          </div>
          <div className="font-medium text-blue-600">
            <div className="h-2 w-20 bg-blue-600 rounded-full" />
          </div>
          <div className="text-xs text-muted-foreground">
            <div className="h-2 w-10 bg-gray-400 rounded-full" />
          </div>
        </div>
        <div className="p-1 rounded-full group-hover:bg-white transition-colors">
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900" />
        </div>
      </div>
    </div>
  );
}
