# FinalProject(기업협업)
[1팀] DTS : Dive To Space
</br>
</br>
ERC1155 를 기반으로 음원 NFT를 지분화하여 펀딩을 진행할 수 있는 중개 사이트
</br>
</br>

## 📌개발기간
2023-01-02~ 2023-02-24(약 7주)

</br>
</br>

## 📌개발일정
### 벤더 미팅 : 매주 수요일 19시
### 팀 미팅 : 1일 2회 팀 미팅 진행
  + 오전 : 작업할당 및 보고   
  + 오후 : 작업 트레킹 및 이슈 공유   
 </br>
 <회의록 및 작업관리 내역>
 <img width="580" alt="image" src="https://user-images.githubusercontent.com/92054372/221343584-58bda8d1-17ed-4cdf-843e-25c0bd480ed8.png">

## 📌일정 및 이슈관리 
### Notion
Link ▶ https://good-scabiosa-c2f.notion.site/6a6350c3ed774e63b7edfc5bb89479fe

</br>
</br>

## 📌DTS 팀 소개
|이름|담당파트|깃|
|:---:|:---:|:---:|
|안주영| 컨트랙트 |[![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/AnJuYeong) |
|손윤미| 프론트 | [![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/YounmiSon) |
|김종찬| 프론트 | [![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/JongChan-Kim98) |
|최하진| 백엔드 |[![깃](https://user-images.githubusercontent.com/92054372/219853674-c8128e76-92bd-4f83-bb1f-8c0fa4188594.png)](https://github.com/pepperflavor) |

</br>
</br>

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
</br>
<img width="659" alt="image" src="https://user-images.githubusercontent.com/92054372/221346453-69429f87-16d3-4966-9785-27c804653807.png">

</br>
</br>

## 📌주요 기능
| 항목 | 상세 |
| --- | --- |
| 펀딩 | 크리에이터 펀딩 신청 / 유저 펀딩 참여 |
| 마켓플레이스 | NFT 구매 및 판매 |
| 거버넌스 | 소유한 NFT에 대한 거버넌스 투표에 참여 |
| 스트리밍 | 펀딩된 NFT 음원 스트리밍 / 구독권 구매 |

</br>
</br>

## 프로젝트 상세

## 프론트
  1. redux-persist  
    * redux store에 저장한 유저 정보(user_grade)가 새로고침 시 초기화 됨
    * redux-presist를 이용하여 로컬 스토리지에 user_grade(회원정보) 저장
    * 로컬스토리지를 비워주도록 하여 로그아웃 구현


  2. ethers.js
    * Contract, Provider, Signer 인스턴스를 이용해 쉽게 컨트랙트와 상호작용 가능 
    * 직관적이고 단순하여 사용 편리
    * 가볍고 빠름(~88kb compressed; 284kb uncompressed)
    </br>
     <img alt="image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgo.gitcoin.co%2Fblog%2Fgrantees-ethersjs%2F&psig=AOvVaw0PkecTYyuQZN6_mKhng68N&ust=1677560469342000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjwhvH1tP0CFQAAAAAdAAAAABAD">
 
### 컨트랙트
사용 체인 및 선택이유
* 사용 체인 :  Ethereum
* 선택이유 : 가장 널리알려진 체인이며 익숙하게 사용할 수 있는 라이브러리를 제공하기 때문에 선택


### 백엔드


