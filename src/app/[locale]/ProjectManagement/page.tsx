'use client';
import {useTranslations} from 'next-intl';

export default function ProjectManagementPage() {
  const t = useTranslations();
  return <div>{t('projectManagement')}</div>;
}
