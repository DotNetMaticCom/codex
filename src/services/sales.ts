import {useQuery} from '@tanstack/react-query';

export interface Sale {
  id: number;
  customer: string;
  amount: number;
  date: string;
}

export async function getRecentSales(): Promise<Sale[]> {
  return [
    {id: 1, customer: 'Acme Corp', amount: 1200, date: '2024-05-01'},
    {id: 2, customer: 'Beta Inc', amount: 850, date: '2024-05-02'},
  ];
}

export function useRecentSales() {
  return useQuery({queryKey: ['recentSales'], queryFn: getRecentSales});
}
