// 이 키는 공개적으로 노출하면 안된다
// .env로 옮김
// console.log(process.env.JWT_SECRET,'ㅡ흐흐흐흐ㅔ흐헤ㅡ헤ㅡ헤')
// import dotenv = require('dotenv');
// import path = require('path');

// dotenv.config();

// if(process.env.NODE_ENV === 'local'){
//     dotenv.config({path: path.join(__dirname, '../.env-local')});
//   }else if(process.env.NODE_ENV === 'dev'){
//     dotenv.config({path: path.join(__dirname, '../.env-dev')});
//   }

export const jwtConstants = {
  secret: "secretKey",
};
