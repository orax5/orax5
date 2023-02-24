/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['team1-divetospace.s3.ap-northeast-1.amazonaws.com'],
    loader: 'default',
    // remotePatterns를 구성합니다.
    // '/imgs/**' 경로 아래에 있는 이미지를 로드합니다.
    // 프로토콜은 HTTPS를 사용합니다.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'team1-divetospace.s3.ap-northeast-1.amazonaws.com',
        pathname: '/imgs/**',
        port: '',
      },
    ],
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