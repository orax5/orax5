import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import  ajyContract  from "../../hooks/ajyContract";
import { useRouter } from "next/router";

const deatil = () => {
  // 컨트랙트 가져오기
  const tokenData = ajyContract();
  // id값 가져오기
  const params = useRouter();
  // endDate는 선택된 날짜로 불러와야함, 지금은 임의로 두고 작업
  const [endDate,setEndDate] = useState(null);
  // 펀딩이 종료되었을 때 보여지는 태그 처리
  const [isTimeOver, setIsTimeOver] = useState(false);
  // 펀딩 기간 이후 버튼 블락 처리
  const TimeOverAlert = () => {
    alert("펀딩종료 후에는 펀딩에 참여하실 수 없습니다");
  };
  // 인풋값들
  const [inputSaleAmount,  setInputSaleAmount] = useState(null);
  // 펀딩 정보 담기
  const [datas, setDatas] = useState({});
  // 시간 정보
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [date, setdate] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    console.log(tokenData);
    if(tokenData != null){
      view();
    }
  }, [tokenData]);

  // onChage 값들 판매수량, 판매가격
  const getSaleAmountValue = (e) => {
    setInputSaleAmount(e.target.value);
  };

  const [countDown, setCountDown] = useState(0);
  // 목표일 도달했을 때 -1시간 -1분 이런식으로 뜨기때문에
  // 경과했을 때 멈추는 처리 해줘야함
  
  const timer = (endDate) => {
    let goalDate = endDate; // 목표일 시간(밀리세컨드)
    let date = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    setInterval(() => {
      {
        goalDate < new Date().getTime() ? 
          clearInterval(setIsTimeOver(true))
          : 
          date = Math.floor((goalDate - new Date().getTime()) / (1000 * 60 * 60 * 24));
          hours = Math.floor(((goalDate - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          minutes = Math.floor(((goalDate - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))
          seconds = Math.floor(((goalDate - new Date().getTime()) % (1000 * 60)) / 1000);
          setdate(date);
          sethours(hours);
          setminutes(minutes);
          setseconds(seconds);
      }
    }, 1000);
  }
  
  const view = async() => {
    const metaData = await tokenData.Dtoken.tokenURI(params.query.id);
    const data = await tokenData.Dtoken.getTokenOwnerData(params.query.id);
    // 자금까지 팔린 갯수 가져오기
    const saleView = await new Promise((res,rej) => res(saleTokenView()));
    console.log(saleView);

    fetch(metaData)
    .then(response => {
      return response.json();
    })
    .then(jsondata => {
      const funddingData = {  
        tokenId : params.query.id,
        img : jsondata.properties.image.description,
        title : jsondata.title,
        category : jsondata.properties.category.description,
        unitPrice : parseInt(data.UnitPrice) / (10 ** 18),
        totalPrice : parseInt(data.TotalPrice) / (10 ** 18),
        balance : data.NftAmount - saleView,
        going : data.isSuccess,
        avg : (saleView / data.NftAmount) * 100,
        eth : saleView * (parseInt(data.UnitPrice) / (10 ** 18)),
        endTime : parseInt(data.EndTime) * 1000
      }
      setDatas(funddingData);
      console.log(funddingData);
      // console.log(saleView);
      timer(parseInt(data.EndTime) * 1000);
    });
    var year = new Date(parseInt(data.EndTime) * 1000).getFullYear().toString().slice(-2); //년도 뒤에 두자리
    var month = ("0" + (new Date(parseInt(data.EndTime) * 1000).getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
    var day = ("0" + new Date(parseInt(data.EndTime) * 1000).getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
    setYear(year);
    setMonth(month);
    setDay(day);
  }

  // 유저가 펀딩하는 함수
  const setFundding = async() => {
    if(!inputSaleAmount){
      alert("빈 값은 안돼");
    }else if(inputSaleAmount > datas.balance){
      alert("남은 펀딩 수량을 확인해주세요.");
    }else{
      const price = inputSaleAmount * datas.unitPrice;
      const aa = await tokenData.Ftoken.userFundding(datas.tokenId, inputSaleAmount, { value: ethers.utils.parseEther(price.toString()) });  
      await aa.wait();
      await tokenData.Ftoken.on("userFunddingEvent", (account,tokenId,amount,price)  => {
        console.log(account.toString());
        console.log(tokenId.toString());
        console.log(amount.toString());
        console.log(price.toString());
      });
      replay();
    }
  }

  // 지금까지 해당 음원 판매된 갯수
  const saleTokenView = async() => {
    const aa = await tokenData.Ftoken.priceCheck(params.query.id);
    return parseInt(aa);
  }

  // 구매후 렌더링 다시 시켜주는 함수
  const replay = async() => {
    const aa = await tokenData.Ftoken.priceCheck(params.query.id);
      if(datas.balance == aa){
        setTimeout(() => { 
          console.log("다시 보여쥬ㅜ는중");
          replay();
        }, 3000);
      }else{
        console.log("된다");
        view();
      }
  }

  // 입력 수량 정확하게 막기 위해서 해당 DOM태그에 직접 처리
  // 이건 아예 데이터 넘길 때 처리하는게 좋을 수도
  // const numref = useRef();

  return (
    <MainContainer>
      <div></div>
      <div>
        <DetailWrap>
          <ImgWrap>
            <Image
              src = {datas.img}
              alt = "detail_page_image"
              width = {500}
              height = {500}
            />
          </ImgWrap>
          <DetailBox>
            <div>
              카테고리 &gt;&nbsp;
              {/* 해당 카테고리만 필터링 된 페이지로 이동 시간 부족하면 따로 이벤트 걸지 않기 */}
              <span>{datas.category}</span>
            </div>
            <div>{datas.title}</div>
            <FundingDetails>
              <div>
                {/* 100 * (펀딩 된 수량/전체 수량) */}
                <strong>{datas.avg}</strong> % 달성
              </div>
              <div>
                <strong>{datas.eth}</strong> ETH 펀딩
              </div>
              <div>
                펀딩 가격 : <strong>{datas.unitPrice}</strong> eth
              </div>
            </FundingDetails>
            <table>
              <tbody>
                <tr>
                  <TableTitle>펀딩기간</TableTitle>
                  <td>{year}년 {month}월 {day}일</td>
                </tr>
                <tr>
                  <TableTitle>남은시간</TableTitle>
                  {datas.going || isTimeOver? (
                    <td>펀딩이 종료되었습니다</td>
                  ) : (
                    <Timer isTimeOver={isTimeOver}>
                      {date}일 {hours}시간 {minutes}분 {seconds}초
                    </Timer>
                  )}
                </tr>
                <tr>
                  <TableTitle>구매수량</TableTitle>
                  <td>
                    <input
                      onChange={getSaleAmountValue}
                      type="number"
                      min="1"
                      max="3000"
                      style={{
                        fontSize: "1.5rem",
                        border: "1px solid white",
                        width: " 12rem ",
                      }}
                    />
                    {/*입력 수량/총 개수*/}
                    &nbsp;/ 남은 수량 : {datas.balance}개
                  </td>
                </tr>
              </tbody>
            </table>
            <FundingBtn>
              {/*약간 딜레이가 생겨서 나중에 다른 처리 방법도 고민해보기 */}
              {datas.going || isTimeOver? (
                <button>펀딩이 종료되었습니다</button>
              ) : (
                <button onClick={setFundding}>펀딩하기</button>
              )}
            </FundingBtn>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          <AboutNft>
            <div>Notice</div>
            <div>
              <p>목표 금액 {datas.totalPrice}ETH</p>
              <p>펀딩 기간 {year}년 {month}월 {day}일</p>
              <p>
                100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이
                100% 모이지 않으면 펀딩을 신청한 유저는 환불을 받을 수 있습니다.
              </p>
            </div>
          </AboutNft>
          {/* <AboutNft>
            <div>음원 설명</div>
            <div>이걸사네 ㅋㅋ</div>
          </AboutNft>
          <AboutNft>
            <div>음원 설명</div>
            <div>음원 설명 내용</div>
          </AboutNft> */}
        </InfoWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;

const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
    > img {
      width: 22rem;
      height: 22rem;
    }
  }
`;

const DetailBox = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${(props) => props.theme.device.tablet} {
    margin-left: 0;
  }
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
    margin-left: 1rem;
  }
  // 카테고리 부분
  > :first-child {
    margin-top: 1rem;
  }
  // nft 제목
  > :nth-child(2) {
    font-size: 5rem;
    font-weight: 900;
  }
  // 상세 정보 테이블
  > table {
    width: 100%;
    line-height: 2.5rem;
    margin-bottom: 2rem;
  }
`;
const TableTitle = styled.td`
  font-weight: 800;
`;
// 펀딩 관련 정보
const FundingDetails = styled.div`
  padding: 0.5rem 0;
  color: red;
  & div {
    padding: 0.3rem 0;
  }
`;
// 펀딩하기 버튼
const FundingBtn = styled.div`
  margin: 0 auto;
  > button {
    ${(props) => props.theme.button.basicBtn}
    width: 28rem;
  }
`;
// 버튼 div
const BtnBox = styled.div`
  width: 30rem;
  margin-top: 1rem;
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
  }
  // 좋아요/문의/공유하기 버튼
  > button {
    ${(props) => props.theme.button.basicBtn};
    margin: 0 1rem;
  }
`;
// 음원 설명, 거래기록 등 상세 정보 넣을 부분
const InfoWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: inherit;
  margin: 5rem 0;
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
  }
`;
// 음원 설명 박스
const AboutNft = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 50rem;
  height: auto;
  border: 1px solid gray;
  border-radius: 1rem;
  margin: 1rem 0;
  // 박스 제목
  > :first-child {
    ${(props) => props.theme.align.flexCenter};
    width: inherit;
    height: 3rem;
    color: black;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: white;
    padding-left: 1rem;
  }
  // 박스 내용
  > :last-child {
    width: inherit;
    height: auto;
    padding: 1rem;
  }
`;
const Timer = styled.td`
  color: red;
  font-weight: 800;
`;
export default deatil;