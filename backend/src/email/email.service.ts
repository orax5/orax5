import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail; // nodemailer에서 import
  constructor(private readonly config: ConfigService) {
    // nodemailer에서 제공하는 Transport 객체 생성
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        // 계정 수정예정
        user: this.config.get('MAILER'),
        pass: this.config.get('MAILER_PASSWORD'),
      },
    });
  }

  async sendCreatorJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
    option: string,
  ) {
    // nodemailer 연결이 잘 됐는지 확인
    console.log('메일전송 했다');

    this.transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    const baseURL = 'http://localhost:3001';

    if (option == 'signUP') {
      // 유저가 누를 버튼이 가질링크 구성, 이 링크로 다시 우리 서비스로 이메일 인증요청이 들어옴
      // /creator_signup/email_verify 이 주소로 다시 요청을보냄
      const url = `${baseURL}/creator/email-verify?signupVerifyToken=${signupVerifyToken}&email=${emailAddress}`;

      const mailOptions: EmailOptions = {
        to: emailAddress,
        subject: 'creator 가입인증 메일',
        // 메일 본문 구성
        html: `
                가입 확인 버튼을 누르시면 가입인증이 완료됩니다</br>
                <form action=${url} method='POST'>
                <button>가입확인</button>
                </form>
                `,
      };
      return await this.transporter.sendMail(mailOptions); //transporter 객체로 메일전송
    } else if (option == 'permit') {
      // 여기에 permit 2로 바꿔주는 라우터로 연결해주면 될듯
      const url = `${baseURL}/creator/result?fundingTitle=${signupVerifyToken}`;

      const mailOptions: EmailOptions = {
        to: emailAddress,
        subject: `${signupVerifyToken} 신청결과 알림 메일`,
        // 메일 본문 구성
        html: `
                <h1>축하드립니다. 신청하신 ${signupVerifyToken}의 펀딩건이 허가되었습니다.</h1></br>
                `,
      };
      return await this.transporter.sendMail(mailOptions); //transporter 객체로 메일전송
    } else if (option == 'reject') {
      // 여기에 permit 2로 바꿔주는 라우터로 연결해주면 될듯
      const url = `${baseURL}/creator/result?fundingTitle=${signupVerifyToken}`;

      const mailOptions: EmailOptions = {
        to: emailAddress,
        subject: `${signupVerifyToken} 신청결과 알림 메일`,
        // 메일 본문 구성
        html: `
                <h1> 결과를 안내해드립니다.</br> 신청하신 ${signupVerifyToken}의 펀딩건이 거부되었습니다.</h1></br>
                <h3>다음에 좋은 결과가 있기를 진심으로 바랍니다.</h3>
                `,
      };
      return await this.transporter.sendMail(mailOptions); //transporter 객체로 메일전송
    }
  }
}

/*
                <form action=${url} method='POST'>
                <button>가입확인</button>
                </form>
*/
