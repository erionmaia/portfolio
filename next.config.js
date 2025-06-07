/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['ws', 'tls', 'stream', 'crypto', 'fs', 'net', 'webpack', 'critters'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        stream: false,
        crypto: false,
        http: false,
        https: false,
        zlib: false,
        path: false,
        os: false,
        webpack: false,
        critters: false,
      };
    }
    return config;
  },
  // Disable webpack 5's automatic polyfills
  webpack5: true,
  // Disable webpack's automatic polyfills
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig; 