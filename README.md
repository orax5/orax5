# FinalProject(기업협업)
[1팀] DTS : Dive To Space


<br />
<br />


- ERC1155 를 기반으로 음원 NFT를 지분화하여 펀딩을 진행할 수 있는 중개 사이트
- 발표자료 ▶ [코드베르그1팀_발표자료 (2).pdf](https://github.com/orax5/orax5/files/10836464/1._.2.pdf)


<br />
<br />

## 📌개발기간
2023-01-02~ 2023-02-24(약 7주)


<br />
<br />


## 📌개발일정
### 벤더 미팅 : 매주 수요일 19시
### 팀 미팅 : 1일 2회 팀 미팅 진행
  + 오전 : 작업할당 및 보고   
  + 오후 : 작업 트레킹 및 이슈 공유   
  
  
<br />
<br />
 
 
 - 회의록 및 작업관리 내역
 <img width="580" alt="image" src="https://user-images.githubusercontent.com/92054372/221343584-58bda8d1-17ed-4cdf-843e-25c0bd480ed8.png">


<br />
<br />


## 📌일정 및 이슈관리 
### Team Notion
Link ▶ https://good-scabiosa-c2f.notion.site/6a6350c3ed774e63b7edfc5bb89479fe



<br />
<br />



## 📌DTS 팀 소개


|이름|담당파트|깃|
|:---:|:---:|:---:|
|안주영| 컨트랙트 |[![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/AnJuYeong) |
|손윤미| 프론트 | [![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/YounmiSon) |
|김종찬| 프론트 | [![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/JongChan-Kim98) |
|최하진| 백엔드 |[![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/pepperflavor) |


<br />
<br />


## 📌개발환경


| 영역 | 사용한 기술 |
| --- | --- |
| 화면구성 | Next.js, Redux, StyledComponents |
| 서버 | nest.js, TypeScript, redis |
| 컨트랙트 | solidity, ethers.js |
| 데이터베이스 |  mySql, noSql |
| AWS 배포 | EC2 |
| 컨트랙트 배포 | goerli |
| 테스트 | remix, ganache, truffle |
| 프로젝트 관리 | gtihub, notion |  


<br />
<br />



<img width="659" alt="image" src="https://user-images.githubusercontent.com/92054372/221346453-69429f87-16d3-4966-9785-27c804653807.png">


<br />
<br />



## 📌주요 기능




| 항목 | 상세 |
| --- | --- |
| 펀딩 | 크리에이터 펀딩 신청 / 유저 펀딩 참여 |
| 마켓플레이스 | NFT 구매 및 판매 |
| 거버넌스 | 소유한 NFT에 대한 거버넌스 투표에 참여 |
| 스트리밍 | 펀딩된 NFT 음원 스트리밍 / 구독권 구매 |




<br />
<br />



## 프로젝트 상세


### 파일 실행
- Front : 현재 레퍼지토리 다운 후 
```
npm run start
```
- Back : 백엔드 레퍼지토리 다운 후 
```
npm run start
```


### 프론트


1. redux-persist
- redux store에 저장한 유저 정보(user_grade)가 새로고침 시 초기화 됨
- redux-presist를 이용하여 로컬 스토리지에 user_grade(회원정보) 저장
- 로컬스토리지를 비워주도록 하여 로그아웃 구현


2. ethers.js 라이브러리 사용 


<br />
<br />



- Contract, Provider, Signer 인스턴스를 이용해 쉽게 컨트랙트와 상호작용 가능
- 직관적이고 단순하여 사용 편리
- 가볍고 빠름(~88kb compressed; 284kb uncompressed)


<br />
<br />


#### 프론트 이슈


1. Prop `className` did not match


-  babel-plugin-styled-components : 식별자 생성 과정을 정규화해준다


```
npm i babel-plugin-styled-component
```


.babelrc 파일에 


```
"plugins": [
  [
  "babel-plugin-styled-components",
    {
      "ssr": true, // SSR을 위한 설정
      "displayName": true, // 클래스명에 컴포넌트 이름을 붙임
      "pure": true // dead code elimination (사용되지 않는 속성 제거)
    }
]
```



2. (콘솔창) Please add the "priority" property if this image is above the fold.
- 이미지 속성에 priority={true} 추가


<br />
<br />



### 컨트랙트



1. 컨트랙트 파일을 기능별로 분리하여 개발 
- 메인 컨트랙트/ fundding 컨트랙트 /sale컨트랙트로 분류 
- 3개의 컨트랙트 파일을 상호작용 시켜 개발


<br />
 
 
2. Ethereum 체인 사용


- 가장 널리알려진 체인이며 익숙하게 사용할 수 있는 라이브러리를 제공하기 때문에 선택


<br />
<br />


### 백엔드


1. 관계형 데이터 베이스 구현
<img width="730" alt="db" src="https://user-images.githubusercontent.com/107897885/221484266-1b2e9a2a-a945-41a9-a626-33bbf4aa1fc6.png">
<br />


2. MVC 패턴에 맞추어 개발
- 가독성과 유지보수를 위해 MVC패턴으로 개발을 진행


## 홈페이지 화면
#### 메인 화면


- 캔버스를 활용하여 애니메이션 구현
- (해당 애니메이션 출처 : https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010)
<img width="1281" alt="image" src="https://user-images.githubusercontent.com/107897885/221486018-1c64de51-4e7b-4326-a079-f7ae4b4bc2ac.png">


#### 사이드 바 
- 유저/크리에이터/관리자 유형에 따라 다른 내용의 사이드바 보여줌
<img width="1281" alt="image" src="https://user-images.githubusercontent.com/107897885/221486113-4bfd5655-8b4c-43dc-a025-8c977641a201.png">


#### 스트리밍
- 구독권을 구매해야만 스트리밍 가능
- react-h5-audio-player 라이브러리를 이용하여 구현
- S3에 업로드 한 음원 파일의 링크를 이용해 재생
<img width="1281" alt="image" src="https://user-images.githubusercontent.com/107897885/221486453-6e46ac18-0445-4d0e-bd29-880bff6851a7.png">


## 기타 
- 메인 우주 애니메이션 
출처: https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010
