/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ]
    },
    experimental: {
      forceSwcTransforms: true,
    },
    headers: () => [{
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    }
  ]
}

module.exports = nextConfig
