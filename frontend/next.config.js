/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'divetospace.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/%EA%B9%83.png',
      },
    ],
    // domains: ['divetospace.s3.ap-northeast-2.amazonaws.com']
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
      ];
    } else {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
      ];
    }
  },
  async redirects() {
    return [
      {
        source: '/creator', // 접근을 막을 페이지
        destination: '/', // redirect 할 페이지
        permanent: true, 
      },
      // {
      //   source: '/admin',
      //   destination: '/',
      //   permanent: true,
      // },
      {
        source: '/mypage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/governance',
        destination: '/',
        permanent: true,
      },
    ];
  },

};

module.exports = nextConfig;