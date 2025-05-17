'use client';
import {useTranslations} from 'next-intl';

export default function InventoryPage() {
  const t = useTranslations();
  return <div>{t('inventory')}</div>;
}
