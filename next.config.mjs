
import withBundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'url'
import path from 'path';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Improves scroll performance
  },
  webpack: (config, { isServer }) => {
    // Enable Webpack 5 persistent caching for faster builds
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
});

export default nextConfig;




  
