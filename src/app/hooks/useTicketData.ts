import { useState, useEffect } from 'react';
import { ITicket, TUser } from '../types';

const useTicketData = () => {
  const [tickets, setTickets] = useState<ITicket[]>();
  const [users, setUsers] = useState<TUser[]>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users)
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        setError(error);
        setLoading(false);
        setTickets(undefined);
        setUsers(undefined)
      }
    };

    fetchTickets();

    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, []);

  return { tickets,users, loading, error };
};

export default useTicketData;
