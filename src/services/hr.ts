import {useQuery} from '@tanstack/react-query';

export interface Employee {
  id: number;
  name: string;
  department: string;
}

export async function getEmployees(): Promise<Employee[]> {
  return [
    {id: 1, name: 'Ahmet Yilmaz', department: 'Sales'},
    {id: 2, name: 'Ayşe Kaya', department: 'Accounting'},
  ];
}

export function useEmployees() {
  return useQuery({queryKey: ['employees'], queryFn: getEmployees});
}
