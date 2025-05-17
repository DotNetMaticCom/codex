import './globals.css';
import {ReactNode} from 'react';
import Link from 'next/link';
import {unstable_setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {getMessages} from '../i18n';
import ReactQueryProvider from '../providers/ReactQueryProvider';

export const metadata = {
  title: 'Codex ERP',
};

function Sidebar() {
  const t = useTranslations();
  return (
    <aside className="w-60 bg-primary text-white p-4 space-y-2">
      <div className="text-lg font-bold mb-4">{t('codexERP')}</div>
      <nav className="space-y-2">
        <Link href="/sales">{t('sales')}</Link>
        <Link href="/accounting">{t('accounting')}</Link>
        <Link href="/hr">{t('hr')}</Link>
      </nav>
    </aside>
  );
}

function Header() {
  const t = useTranslations();
  return (
    <header className="mb-6 border-b pb-4 flex justify-end">{t('user')}</header>
  );
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ReactQueryProvider>
            <div className="min-h-screen flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Header />
                {children}
              </main>
            </div>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: 'tr'}, {locale: 'en'}];
}
