'use client';

import Card from '../../../components/Card';
import {useAccountingKpis} from '../../../services/accounting';
import {useTranslations} from 'next-intl';

export default function AccountingPage() {
  const t = useTranslations();
  const {data = []} = useAccountingKpis();

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((kpi) => (
        <Card key={kpi.name} title={t(kpi.name)}>{kpi.value}</Card>
      ))}
    </div>
  );
}
