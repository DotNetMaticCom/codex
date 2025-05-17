'use client';
import {useTranslations} from 'next-intl';

export default function ProductionPage() {
  const t = useTranslations();
  return <div>{t('production')}</div>;
}
