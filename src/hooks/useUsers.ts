import { useState, useEffect } from 'react';
import { fetchUsers } from '@/data-access/api/users';
import { User } from '@/data-access/models/user';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadUsers = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchUsers();
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadUsers();
    
    return () => {
      isMounted = false;
    };
  }, []);

  return { users, isLoading, error };
}
