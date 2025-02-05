import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  experimental: {
    /*Essas funçoes ja foram incorporadas no nextjs,
    por isso não precisam ser icrementadas como experimental*/
    //ppr: 'incremental',
    //after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
