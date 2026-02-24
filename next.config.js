/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Supported language
    locales: ['en', 'es', 'zh_CN', 'ko', 'ja', 'fr', 'de', 'tr', 'pt', 'it', 'pl', 'zh_TW'],
    // default language
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
