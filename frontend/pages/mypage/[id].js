import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import Offers2 from "../components/Offers2";
import ajyContract from "../../hooks/ajyContract";
import Cookies from 'js-cookie';
import { useWeb3React } from "@web3-react/core";

const deatil = () => {
  const tokenData = ajyContract();
  const router = useRouter();    
  const amount = router.query.balance; // props로 전달받는 amount

  const tokenId = router.query.tokenId; // props로 전달받는 tokenId
  const img = router.query.img; // props로 전달받는 tokenId
  const title = router.query.title; // props로 전달받는 tokenId
  const category = router.query.category; // props로 전달받는 tokenId
  const composer = router.query.composer; // props로 전달받는 tokenId
  const lyricist = router.query.lyricist; // props로 전달받는 tokenId
  const singer = router.query.singer; // props로 전달받는 tokenId


  // const [tokenData, settokenData]= useState()/

  const token = Cookies.get('jwtToken');

  // 메타마스크 연결 부분
  const { account } = useWeb3React();


  const viewAll = async() => {
    const funddingCount = await tokenData.Dtoken.idsView();

    const arr = [];
    for(let i = 1; i <= funddingCount.length; i++){
      const metaData = await tokenData.Dtoken.tokenURI(i);
      const data = await tokenData.Dtoken.getTokenOwnerData(i);
      fetch(metaData)
      .then(response => {
        return response.json();
      })
      .then(jsondata => {
        console.log(jsondata.properties.image.description)
        const funddingData = { 
          tokenId : i,
          img : jsondata.properties.image.description,
          title : jsondata.title,
          category : jsondata.properties.category.description,
          unitPrice : (parseInt(data.UnitPrice) / (10 ** 18)),
          going : data.isSuccess,
          
        }
        arr.push(funddingData);
        if(arr.length == funddingCount.length){
          setDatas(arr);
        }
      });
    }
    console.log(arr);
  }

  // useEffect(() => {
  //   axios({
  //     url: `http://localhost:3001/user/mypage/:id`,
  //     method: "get",
  //     headers:{
  //       Authorization: `Bearer ${token}`,
  //     }
  //   })
  //     .then((res) => {
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [])
  

  const [unsigned, setUnsigned] = useState(false);
  const [inputSaleAmount,  setInputSaleAmount] = useState(null);
  const [price, setPrice] = useState(null);
  
  // 컨트랙트에서 리스트 숫자 가져올 때 담아준다.(비교하기 위해서)
  const [saleTotalAmount, setSaleTotalAmount] = useState(0);
  
  // 판매 내역 리스트 담아줌
  const [ saleListarray, setSaleListArray ] = useState([]);
  // 유저 판매 미체결 내역 담아줌
  const [userSaleList,setUserSaleList] = useState([]);

  // 최초 실행시 판매 내역 보여줌
  useEffect(()=>{
    if(tokenData != null){
      console.log("123123");
      ViewOneHandler();
    }
  },[tokenData]);
 
  // onChage 값들 판매수량, 판매가격
  const getSaleAmountValue = (e) => {
    setInputSaleAmount(e.target.value);
  }
  const getSalePriceValue = (e) => {
    setPrice(e.target.value);
  }

  // 미체결 내역 보는 거
  const unsignedToggleHandler = async() => {
    setUnsigned(!unsigned)
  }
  
  // 판매 등록
  const SaleHandler = async() => {
    if(inputSaleAmount == 0 || inputSaleAmount== null){
      alert("0과 공백은 입력 불가능합니다.")
    }
    console.log(tokenData.stokenCA);
    await tokenData.Dtoken.isSalesToken(tokenData.stokenCA, tokenId, inputSaleAmount, parseInt(price));
    await tokenData.Stoken.on("SaleEvent", (account, tokenId, amount, price)  => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(amount.toString());
      console.log(price.toString());
    });
    setNumberList();
    console.log("qweqweA");
  }
  
  // 판매 리스트 등록 컨트랙트가 다 끝나면 ViewOneHandler()함수 실행해서 리스트 랜더링 다시 해준다.
  async function setNumberList(){
    console.log("1232131232132131232131");
    const saleListNumber = await tokenData.Stoken.saleNumberList(tokenId);
    if(saleTotalAmount == parseInt(saleListNumber)){
      console.log(saleListNumber + "등록중 기달기달");
      setTimeout(() => {
        setNumberList();
      }, 5000);
    } else{
      ViewOneHandler();
      console.log("등록 완료")
    }
  };

  // 판매 취소 버튼 핸들러
  const SaleCancleHandler = async() => {
    await tokenData.Stoken.cancelSalesToken(tokenId);
    tokenData.Stoken.on("CancelEvent", (account, tokenId ) => {
      console.log(account);
      console.log(tokenId + "번 음원 판매 취소 됨.")
    })
    setDeleteList();
  }

  async function setDeleteList(){
    const ViewOne = await tokenData.Stoken.getSalesTokenListAll(tokenId,parseInt(userSaleList[0].listId));
    if(parseInt(ViewOne.amount) != 0){  
      console.log("취소중 기달기달");
      setTimeout(() => {
        setDeleteList();
      }, 5000);
    } else{
      if(tokenData != null){
        ViewOneHandler();
        console.log("취소 완료")
      }
      
    }
  }
  
  const ViewOneHandler = async() => {
    // 거래 등록 내용 보기 (from 주소, 판매수량, 가격)
    const saleListNumber = await tokenData.Stoken.saleNumberList(tokenId);
    // useState에 현재 등록 리스트 수를 넣어준다. 비교할 때 사용하려고.
    setSaleTotalAmount(parseInt(saleListNumber));

    const arr = [];
    const arr2 = [];
    for(let i = 1; i <= saleListNumber; i++){
        const ViewOne = await tokenData.Stoken.getSalesTokenListAll(tokenId,i);
        if(ViewOne.amount != 0){
          const saleListView = {
            account : ViewOne.account,
            amount : parseInt(ViewOne.amount),
            price : parseInt(ViewOne.price),
            listId : parseInt(ViewOne.listId)
          };
          if(ViewOne.account == account){
            arr2.push(saleListView);
          }
          arr.push(saleListView);
        }
      }
      setSaleListArray(arr);
      setUserSaleList(arr2);
  }

  return (
    <MainContainer>
      <div></div>
      <div> 
        <DetailWrap>
          <ImgWrap>
            <Image
              src={img}
              alt="detail_page_image"
              width={500}
              height={500}
            />
          </ImgWrap>
          <DetailBox>
            <div>
              카테고리 &gt;&nbsp;
              <span>{category}</span>
            </div>
            <div>{title}</div>
            <table>
              {/* 제목과 내용을 정렬하기 쉽게하려고 table사용 */}
              <tbody>
                <tr>
                  <td>작곡가</td>
                  <td>{composer}</td>
                </tr>
                <tr>
                  <td>작사가</td>
                  <td>{lyricist}</td>
                </tr>
                <tr>
                  <td>가수</td>
                  <td>{singer}</td>
                </tr> 
                <tr>
                  <td>수량 (보유:{amount})</td>
                  <td>
                    <NumSelector type="number" onChange={getSaleAmountValue}/>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <NumSelector type="number" onChange={getSalePriceValue}/>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <PageBtn onClick={SaleHandler}>판매하기</PageBtn>
              <Link href="/streaming">
                <PageBtn>스트리밍</PageBtn>
              </Link>
              <PageBtn onClick={unsignedToggleHandler}>미체결내역</PageBtn>
            </div>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          {unsigned && (
            <InfoBox>
              <div>미체결내역</div>
              <AboutNft>
                <div style={{display:"flex", justifyContent: "space-around"}}>
                  <div style={{color:"black"}}>수량</div>
                  <div style={{color:"black"}}>개당 가격</div>
                  <CancleBtnn>취소</CancleBtnn>
                </div>
                {userSaleList.map((data, idx) => (
                  <div key={idx} style={{display:"flex", justifyContent: "space-around", alignItems: "center"}}>
                  <div style={{minWidth:"2rem", textAlign:"center"}}>{data?.amount}</div>
                  <div>{data?.price}eth</div>
                  <CancleBtn onClick={SaleCancleHandler}>취소</CancleBtn>
                </div>
                ))}
              </AboutNft>
            </InfoBox>
          )}
          <InfoBox>
            <div></div>
            <AboutNft>
              <div>음원 설명</div>
              <div>음원 설명음원 설명음원 설명</div>
            </AboutNft>
          </InfoBox>
          <InfoBox>
            <div>Offer</div>
            <Offers2
              saleListarray = {saleListarray}
            />
          </InfoBox>
        </InfoWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 사진이랑 정보있는 div
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;
// 이미지 정렬용 div
const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  @media ${(props) => props.theme.device.mobile} {
    > img {
      width: 22rem;
      height: 22rem;
    }
  }
`;
// nft 상세 정보
const DetailBox = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
    margin-left: 0;
  }
  // 카테고리 부분
  > :first-child {
    margin-top: 2rem;
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
  }
  // 버튼 div
  > :last-child {
    ${(props) => props.theme.align.flexCenter};
    margin-top: 1rem;
    @media ${(props) => props.theme.device.mobile} {
      ${(props) => props.theme.align.flexCenterColumn};
    }
  }
`;
// 수량 선택 박스
const NumSelector = styled.input`
  width: 10rem;
  height: 2rem;
  border: 1px solid white;
`;
// 구매하기/스트리밍/ 미체결 버튼
const PageBtn = styled.button`
  ${(props) => props.theme.button.basicBtn};
  margin: 0.5rem;
  width: 8rem;
`;

// 취소버튼
const CancleBtn = styled.button`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0.5rem;
    width: 4rem;
    :hover {
      background:white;
      color:black;
    }
`
// 칸 메꿀라고 야매로만듬
const CancleBtnn = styled.button`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0.5rem;
    width: 4rem;
    cursor: default;
`

// 음원 설명, 거래기록 등 상세 정보 넣을 부분
const InfoWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  width: inherit;
  margin: 2rem 0;
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
  }
`;
// 상세정보 속성 박스
const InfoBox = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  margin: 2rem 2rem 2rem 0;
  width: 60rem;
  // 상세정보 제목
  > :first-child {
    margin: 1rem;
    font-size: 3rem;
    font-weight: 900;
  }
`;
// 음원 설명 박스
const AboutNft = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 60rem;
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
    padding-right: 1rem;
  }
  // 박스 내용
  > :last-child {
    width: inherit;
    height: auto;
    padding: 1rem;
  }
`;

export default deatil;
