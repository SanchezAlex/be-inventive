const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // NextJS <Image> component needs to whitelist domains for src={}
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '**'
      },
      {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '**'
      },
      
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**'
      },
      
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '**'
      },
    ],
    path: '/_next/image',
    loader: 'default',
    // localPatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '3000',
    //     pathname: '/media/**',
    //   },
    // ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // async headers() { 
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains; preload",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // }
};

module.exports = nextConfig;
