import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user_dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { UserLoginService } from 'src/user/login/login.service';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '../../cache/cache.service'
import { async } from 'rxjs';

@Injectable()
export class CreatorSignupService {
  constructor(
    private readonly prisma: PrismaService,
    private userLoginService: UserLoginService,
    private emailService: EmailService,
    private config: ConfigService,
  ) {}

<<<<<<< HEAD
    constructor(private readonly prisma: PrismaService, 
        private userLoginService : UserLoginService, 
        private emailService: EmailService,  
        private config: ConfigService,
        private cacheManger: CacheService
        ){}


    async creatorSignUP(signupForm: CreateUserDto){
        const userwallet = signupForm.user_wallet;
        const nick = signupForm.user_nickname;
        // 존재하는 유저인지 확인
       const existUser = await this.isExistUser(userwallet);
       console.log("@@@ 익짓 : ", existUser)
       const enterPWD = signupForm.user_pwd;
       const newsignupForm = {...signupForm} // 입력값 다른 주소로 복사해서 할당해놓기 
        // 첫번째인수 = 환경변수 키값, 두번째 기본값 넣어줄 수 있음
        // 쉬발 해시화 못해주고 salt 못찾고 빌빌거리길래 혹시나 해서
        // parseInt해주니까 된다
        const SORT_NUM = parseInt(this.config.get('SORT_NUM')); 

        // 닉네임 중복검사
        const existNickName = await this.isExistNickName(nick);
        console.log("@@@@@ 닉네임 : ", existNickName);
        

       if(existUser && existNickName){// 가입가능한 유저라면
            // 입력받은 비밀번호 해시화해서 저장...이 안되고 있음
            const hasPWD = bcrypt.hashSync(enterPWD, SORT_NUM);
            console.log("@@@PWD",hasPWD)
            newsignupForm.user_pwd = hasPWD;
            
            
        // bcrypt.genSalt(SORT_NUM, function(err, salt){
        //     bcrypt.hash(enterPWD, salt, function(err, hash){
        //         console.log("@@@@",hash);
        //         newsignupForm.user_pwd = hash;
        //     })
        // })
        //    const hasPWD = bcrypt.hash(enterPWD, saltOrRounds, function (err, hash) {
        //        newsignupForm.user_pwd = hasPWD;
        //    });
          
            // (err, encryptedPw: string): any =>{
            //     console.log("@@@@@",encryptedPw); // undifinded 뜸
            //     newsignupForm.user_pwd = encryptedPw;
            // });

            // 임시로 uuid 토큰 발급 uuid.v1 이란?
            // email인증에 담아보낼 토큰 임시값 무작위 문자열임
            const signupVerifyToken = uuid.v1();

            newsignupForm.user_email_token = signupVerifyToken; 
            // 레디스에 회원가입 정보 객체 저장
            await this.cacheManger.set('creatorSignupForm', newsignupForm);
            

            // 이메일 발송
            // return이 비어있는거 맞음! 다른 라우터로 요청보냈음 - 처음에 this.sendCreatorJoinEmail() 리턴값을 받음
            // Promise여야 .then이 효과있는듯 => 것도 아닌듯 ㅅㅂ
            // 이메일 반환값 true 주게 만들어서 판단하고 저장해주기로 함!
            await this.sendCreatorJoinEmail(signupForm.user_email, signupVerifyToken);
  
            // // 토큰 응답한 사람이 입력한 이메일과 같은지 다시한번 검증할 필요가벗음
            // uuid.v1 사용했기 때문
        }else{ 
            //return false.
            throw new HttpException("이미 계정이 존재합니다.", HttpStatus.BAD_REQUEST)
       }
    }

    // 이미 가입하는 유저인지 확인: bool
    private async isExistUser(user_wallet: string): Promise<boolean>{
        const userwallet = user_wallet;
        // 이미 존재하는 유저인지 확인
        const exist = await this.prisma.user.findFirst({
            where: {
                user_wallet: userwallet
            }
        });
        
        if(exist == null||undefined){
            return true; // 존재하지않으면 true리턴
        } 
        return false;
    }


    // 닉네임 중복검사
    private async isExistNickName(user_nickname: string): Promise<boolean>{
        const exist = await this.prisma.user.findFirst({
            where:{
                user_nickname : user_nickname
            }
        });
        console.log("@@@ 닉네임 함수 : ", exist);
        // 값이 존재하지 않으면
        if(exist == null||undefined){
            return true;
        }
        return false;

=======
  async creatorSignUP(signupForm: CreateUserDto) {
    // 존재하는 유저인지 확인
    const existUser = await this.isExistUser(signupForm.user_wallet);
    const enterPWD = signupForm.user_pwd;
    const newsignupForm = { ...signupForm }; // 입력값 다른 주소로 복사해서 할당해놓기
    // 첫번째인수 = 환경변수 키값, 두번째 기본값 넣어줄 수 있음
    // 쉬발 해시화 못해주고 salt 못찾고 빌빌거리길래 혹시나 해서
    // parseInt해주니까 된다
    const SORT_NUM = parseInt(this.config.get('SORT_NUM'));

    // 닉네임 중복검사
    const existNickName = await this.isExistNickName(signupForm.user_nickname);

    if (existUser && existNickName) {
      // 가입가능한 유저라면
      // 입력받은 비밀번호 해시화해서 저장...이 안되고 있음
      const hasPWD = bcrypt.hashSync(enterPWD, SORT_NUM);
      console.log('@@@PWD', hasPWD);
      newsignupForm.user_pwd = hasPWD;

      // bcrypt.genSalt(SORT_NUM, function(err, salt){
      //     bcrypt.hash(enterPWD, salt, function(err, hash){
      //         console.log("@@@@",hash);
      //         newsignupForm.user_pwd = hash;
      //     })
      // })
      //    const hasPWD = bcrypt.hash(enterPWD, saltOrRounds, function (err, hash) {
      //        newsignupForm.user_pwd = hasPWD;
      //    });

      // (err, encryptedPw: string): any =>{
      //     console.log("@@@@@",encryptedPw); // undifinded 뜸
      //     newsignupForm.user_pwd = encryptedPw;
      // });
      // 임시로 uuid 토큰 발급 uuid.v1 이란?
      // email인증에 담아보낼 토큰 임시값 무작위 문자열임
      const signupVerifyToken = uuid.v1();

      newsignupForm.user_email_token = signupVerifyToken;
      // console.log("@@@@ FORM",newsignupForm) // 정상적으로 나옴

      // 이메일 발송
      // return이 비어있는거 맞음! 다른 라우터로 요청보냈음
      // Promise여야 .then이 효과있는듯 => 것도 아닌듯 ㅅㅂ
      this.sendCreatorJoinEmail(signupForm.user_email, signupVerifyToken);

      // // 토큰 응답한 사람이 입력한 이메일과 같은지 다시한번 검증
      // const { accepted } = response;
      // const email = signupForm.user_email;
      // if(accepted == email){

      // }else{
      //     console.log("DB에 안들어감");
      // }
    } else {
      //return false.
      throw new HttpException(
        '이미 계정이 존재합니다.',
        HttpStatus.BAD_REQUEST,
      );
>>>>>>> main
    }
  }

  // 이미 가입하는 유저인지 확인: bool
  private async isExistUser(user_wallet: string): Promise<boolean> {
    try {
      const userwallet = user_wallet;
      // 이미 존재하는 유저인지 확인
      const exist = await this.userLoginService.findOne(userwallet);
      //console.log("@@@@", exist);
      if (exist == null || undefined) {
        return true; // 존재하지않으면 false리턴
      }
      return false;
    } catch (error) {
      throw new HttpException(
        '이미 존재하는 회원입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

<<<<<<< HEAD
    // 크리에이터로 가입하려면 이메일 인증
    private async sendCreatorJoinEmail(email:string, signupVerifyToken: string): Promise<any>{
       await this.emailService.sendCreatorJoinVerification(email, signupVerifyToken);
       console.log("sendCreatorJoinEmail 진행되었다")
       // signupform 돌려줄줄 알았는데 아님
       //return result; => sendCreatorJoinVerification을 실행시키기 때문에 리턴값이 비어있었음
       // 다른 라우터로 요청을 보냈으니까
=======
  // 닉네임 중복검사
  private async isExistNickName(user_nickname: string): Promise<boolean> {
    try {
      const exist = await this.userLoginService.findOne(user_nickname);
      // 값이 존재하지 않으면
      if (exist == null || undefined) {
        return true;
      }
      return false;
    } catch (error) {
      throw new HttpException('중복된 아이디입니다.', HttpStatus.BAD_REQUEST);
>>>>>>> main
    }
  }

  // DB에 저장하기
  async saveCreator(signupform: CreateUserDto) {
    await this.prisma.user.create({
      data: signupform,
    });
  }

<<<<<<< HEAD
    // 유효한 이메일인지 확인 
    async verifyEmail(signupVerifyToken: string): Promise<any>{
        // url에 담겼던 토큰 꺼내서 일치하는 유저가 있는지 확인
            const result = await this.prisma.$queryRaw`SELECT * FROM USER WHERE user_email_token =${signupVerifyToken}`
            console.log("@@@verifyEmail 결과값 : ",result);
            const creatorDataForm = await this.cacheManger.get('creatorSignupForm');
            await this.prisma.user.create({
                data : creatorDataForm
            })
            console.log("회원가입 완료");
=======
  // 크리에이터로 가입하려면 이메일 인증
  private async sendCreatorJoinEmail(
    email: string,
    signupVerifyToken: string,
  ): Promise<any> {
    const result = await this.emailService.sendCreatorJoinVerification(
      email,
      signupVerifyToken,
    );
    console.log('sendCreatorJoinEmail 진행되었다');
    console.log('@@@@@', result);
    return result;
    // signupform 돌려줄줄 알았는데 아님
    //return result; => sendCreatorJoinVerification을 실행시키기 때문에 리턴값이 비어있었음
    // 다른 라우터로 요청을 보냈으니까
  }
>>>>>>> main

  // 유효한 이메일인지 확인
  async verifyEmail(signupVerifyToken: string): Promise<any> {
    // url에 담겼던 토큰 꺼내서 일치하는 유저가 있는지 확인
    const result = await this.prisma
      .$queryRaw`SELECT * FROM USER WHERE user_email_token =${signupVerifyToken}`;
    console.log('@@@verifyEmail 결과값 : ', result);
    // 여기서 DB에 저장하는게 맞는것 같은데
    //await this.saveCreator(newsignupForm);
    console.log('회원가입 완료');

    if (result == null) {
      return new HttpException(
        '잘못된 인증정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return '회원가입이 완료되었습니다.';
    }
  }
  // DB에서 signupVerifyToken으로 회원가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
  // 바로 로그인 상태가 되도록 JWT 발급
  //throw new Error('일단 오류 뱉기')
}
