import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer'

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

@Injectable()
export class EmailService {
    private transporter : Mail; // nodemailer에서 import
    constructor(){
        // nodemailer에서 제공하는 Transport 객체 생성
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                // 계정 수정예정
                user: 'j8747j@gamil.com',
                pass: 'pepper!!09'
            }
        });
    }

    async sendCreatorJoinVerification(emailAddress: string, signupVerifyToken: string){

        // nodemailer 연결이 잘 됐는지 확인
        this.transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });

        const baseURL = 'http://localhost:3000';

        // 유저가 누를 버튼이 가질링크 구성, 이 링크로 다시 우리 서비스로 이메일 인증요청이 들어옴
        const url = `${baseURL}/creator_signup/email_verify?signupVerifyToken=${signupVerifyToken}`;
        
        const mailOptions: EmailOptions ={
            to: emailAddress,
            subject : 'creator 가입인증 메일',
            // 메일 본문 구성
            html: `
                가입 확인 버튼을 누르시면 가입인증이 완료됩니다</br>
                <form action=${url} method='POST'>
                <button>가입확인</button>
                </form>
                `
        }
        
        return await this.transporter.sendMail(mailOptions); //transporter 객체로 메일전송
    }
}
