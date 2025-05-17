'use client';

import Button from '../../../components/Button';
import DataTable, {Column} from '../../../components/DataTable';
import {useRecentSales, Sale} from '../../../services/sales';
import {useTranslations} from 'next-intl';

export default function SalesPage() {
  const t = useTranslations();
  const {data = []} = useRecentSales();

  const columns: Column<Sale>[] = [
    {header: t('customer'), accessor: (s) => s.customer},
    {header: t('amount'), accessor: (s) => s.amount},
    {header: t('date'), accessor: (s) => s.date},
  ];

  return (
    <div className="space-y-4">
      <Button>{t('createQuote')}</Button>
      <DataTable columns={columns} data={data} keyField="id" />
    </div>
  );
}
