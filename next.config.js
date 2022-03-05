/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Supported language
    locales: ['en', 'fr'],
    // default language
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
