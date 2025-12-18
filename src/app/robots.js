export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.innovativecustomservices.com/sitemap.xml', // Update this with your actual domain
  }
}
