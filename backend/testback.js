/*

백엔드 서버를 프론트에서 간편하게 테스트해보고 싶은 경우
------------------------------------------------------------
    npm install -g json-server
------------------------------------------------------------


 포트번호 3001에 시작해두고
------------------------------------------------------------
    json-server --watch json-server/db.json --port 3001
------------------------------------------------------------



"Invoke-WebRequest : 'Headers' 매개 변수를 바인딩할 수 없습니다. "System.String" 유형의 "Content-Type: application/json" 값을 "System.Collections.IDictionary" 유형으로 변환할 수 없습니다.
위치 줄:1 문자:17"
저는 해당문제가 VS 코드에 Shell에서 시작할 때 발생한다는 사실을 깨닫고
윈도 기준 CMD (명령 프롬트) 창에서 시작해서 오류를 극복했습니다. 



    package.json 수정하기 전
    
    "nest start --watch", 

    "build": "nest build",

    "start:local": "cross-env NODE_ENV=local nest start --watch",
    
*/

 
// creator에서 
// yelloe-W 깃 네스트 참고

// pipe, guard-요청 헤더에 있는 값 검증: return bool임 값이 잇는지 없는지 리턴해줌, 
// 인터셉트- 요청주는 흐름, 응답받는 흐름 파이프->가드->인터셉터-> 컨트롤러  이때 무조건 인터셉트가 실행됨
// 서비스에서 디비로 처리한 결과 리턴받은걸 -> 컨트롤러가 받고 컨트롤러에서 앞단으로 결과값 뿌려줄 때
// 인터셉트가 던져주는 것

// 요청 브라우저 요청때렷을때. 파이프 -> 가드 -> 인터셉터 -> 컨트롤러 -> 서비스 

// 응답 콜스택에서 쌓였다가 서비스-> cor 빠진 결과값 -> 컨트롤러-> 인터셉터 이렇게 빠져나감


// {
//     "Version" : "2012-10-17",
//     "Statement" : [
//         {
//             "Sid" : "AddMusicFile",
//             "Effect" : "Allow",
//             "Principal" : {"AWS" : "arn:aws:iam::295376149657:user/divetospace_music"},
//             "Action" :[
//                 "s3:GetObject",
//                 "s3:GetBuketLocation",
//                 "s3:ListBucket",
//             ],
//             "Resource": "arn:aws:s3:::divetospacemusic",
//         }
//     ]
// }


// {
//     "Version" : "2012-10-17",
//     "Statement" : [
//         {
//             "Sid" : "AddMusicFile",
//             "Effect" : "Allow",
//             "Principal" :"*",
//             "Action" :[
//                 "s3:GetObject",
//                 "s3:PutObject",
//                 "s3:GetBuketLocation",
//                 "s3:ListBucket",
//             ],
//             "Resource": "arn:aws:s3:::divetospacemusic/*",
//         }
//     ]
// }




// 버킷 설정 권한 이렇게 해주기
// {
//     "Version": "2012-10-17",
//     "Statement": [
//         {
//             "Sid": "AddMusicFile",
//             "Effect": "Allow",
//             "Principal": "*",
//             "Action": [
//                 "s3:PutObject",
//                 "s3:GetObject",
//                 "s3:DeleteObject"
//             ],
//             "Resource": "arn:aws:s3:::divetospacemusic/*"
//         }
//     ]
// }