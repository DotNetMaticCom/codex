import {useQuery} from '@tanstack/react-query';

export interface Kpi {
  name: string;
  value: number;
}

export async function getAccountingKpis(): Promise<Kpi[]> {
  return [
    {name: 'revenue', value: 100000},
    {name: 'profit', value: 25000},
  ];
}

export function useAccountingKpis() {
  return useQuery({queryKey: ['accountingKpis'], queryFn: getAccountingKpis});
}
