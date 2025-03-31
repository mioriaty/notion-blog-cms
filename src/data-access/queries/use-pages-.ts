import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const useGetPagesQuery = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: async () => {
      const response = await fetch('/api/notion/pages');

      if (!response.ok) {
        throw new Error('Failed to fetch pages');
      }

      return response.json() as Promise<QueryDatabaseResponse>;
    }
  });
};
