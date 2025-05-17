export async function getMessages(locale: string) {
  switch (locale) {
    case 'en':
      return (await import('../public/locales/en/common.json')).default;
    case 'tr':
    default:
      return (await import('../public/locales/tr/common.json')).default;
  }
}
