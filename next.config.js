/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Supported language
    locales: ['en', 'fr', 'tr', 'it', 'zh_CN', 'zh_TW'],
    // default language
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
