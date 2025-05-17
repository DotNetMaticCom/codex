import {ReactNode} from 'react';
import {useTranslations} from 'next-intl';

export default function SalesLayout({children}: {children: ReactNode}) {
  const t = useTranslations();
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">{t('sales')}</h1>
      {children}
    </div>
  );
}
