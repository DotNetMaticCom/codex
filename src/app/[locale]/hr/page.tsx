'use client';

import DataTable, {Column} from '../../../components/DataTable';
import {useEmployees, Employee} from '../../../services/hr';
import {useTranslations} from 'next-intl';

export default function HrPage() {
  const t = useTranslations();
  const {data = []} = useEmployees();

  const columns: Column<Employee>[] = [
    {header: t('employees'), accessor: (e) => e.name},
    {header: t('department'), accessor: (e) => e.department},
  ];

  return <DataTable columns={columns} data={data} keyField="id" />;
}
