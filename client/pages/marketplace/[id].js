import Link from "next/Link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
//  promise resolve 과정 없이도 변수에 할당할 수 있도록 해준다
import dynamic from "next/dynamic";
import Offers from "../components/Offers";
import { useSelector } from "react-redux";

const deatil = () => {
  const Dtoken = useSelector((state) => state.user.contracts.Dtoken);
  const ftokenCA = useSelector((state) => state.user.contracts.ftokenCA);
  const account = useSelector((state) => state.user.users.account);

  const buyNft = () => {
    console.log("살래욥");
  };
  return (
    <MainContainer>
      <div></div>
      <div>
        <DetailWrap>
          <ImgWrap>
            <Image
              src="/Img/sample.jpg"
              alt="detail_page_image"
              width={500}
              height={500}
            />
          </ImgWrap>
          <DetailBox>
            <div>
              카테고리 &gt;&nbsp;
              <span>가요</span>
            </div>
            <div>test_title</div>
            <table>
              {/* 제목과 내용을 정렬하기 쉽게하려고 table사용 */}
              <tbody>
                <tr>
                  <td>작곡가</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>작사가</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>가수</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>판매기간</td>
                  <td>~ 2023-02-20</td>
                </tr>
                <tr>
                  <td>수량</td>
                  <td>
                    <NumSelector type="number" />
                  </td>
                </tr>
                <tr>
                  <td>구매가격</td>
                  <td>
                    <NumSelector type="number" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <PageBtn onClick={buyNft}>구매하기</PageBtn>
              <Link href="/streaming">
                <PageBtn>스트리밍 하러가기</PageBtn>
              </Link>
            </div>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          <InfoBox>
            <div>음원 설명</div>
            <AboutNft>
              <div>음원 설명</div>
              <div>음원 설명음원 설명음원 설명</div>
            </AboutNft>
          </InfoBox>
          <InfoBox>
            <div style={{ width: "100%", textAlign: "center" }}>호가창</div>
            <div>
              <AskingPriceUI>
                <li>판매 수량</li>
                <li>가격</li>
                <li>구매 수량</li>
              </AskingPriceUI>
              {/* 구매상태창 */}
              <div className="Sell" style={{ display: "flex" }}>
                <PriceBox>
                  <PriceRow>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                    <Amount_units>
                      <strong style={{ margin: "0 6px", color: "red" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units>
                  </PriceRow>
                  <PriceRow>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                    <Amount_units>
                      <strong style={{ margin: "0 6px", color: "red" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units>
                  </PriceRow>
                  <PriceRow>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                    <Amount_units>
                      <strong style={{ margin: "0 6px", color: "red" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units>
                  </PriceRow>
                  <PriceRow>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                    <Amount_units>
                      <strong style={{ margin: "0 6px", color: "red" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units>
                  </PriceRow>
                  <PriceRow>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                    <Amount_units>
                      <strong style={{ margin: "0 6px", color: "red" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units>
                  </PriceRow>
                </PriceBox>
                <ExtraBox>
                  <div>
                    <span>상한가</span>
                    <strong style={{ color: "red" }}>23,100</strong>
                  </div>
                  <div>
                    <span>하한가</span>
                    <strong style={{ color: "blue" }}>23,100</strong>
                  </div>
                  <div>
                    <span>전일종가</span>
                    <strong style={{ color: "white" }}>23,100</strong>
                  </div>
                  <div>
                    <span>최근1주일</span>
                  </div>
                  <div>
                    <span>최고가</span>
                    <strong style={{ color: "red" }}>23,100</strong>
                  </div>
                  <div>
                    <span>최저가</span>
                    <strong style={{ color: "blue" }}>23,100</strong>
                  </div>
                </ExtraBox>
              </div>
              {/* 판매상태창 */}
              <div className="Buy" style={{ display: "flex" }}>
                <ExtraBox>
                  <div>
                    <span>상한가</span>
                    <strong style={{ color: "red" }}>23,100</strong>
                  </div>
                  <div>
                    <span>하한가</span>
                    <strong style={{ color: "blue" }}>23,100</strong>
                  </div>
                  <div>
                    <span>전일종가</span>
                    <strong style={{ color: "white" }}>23,100</strong>
                  </div>
                  <div>
                    <span>최근1주일</span>
                  </div>
                  <div>
                    <span>최고가</span>
                    <strong style={{ color: "red" }}>23,100</strong>
                  </div>
                  <div>
                    <span>최저가</span>
                    <strong style={{ color: "blue" }}>23,100</strong>
                  </div>
                </ExtraBox>
                <PriceBox>
                  <PriceRow>
                    <Amount_units_buy>
                      <strong style={{ margin: "0 6px", color: "blue" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units_buy>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                  </PriceRow>
                  <PriceRow>
                    <Amount_units_buy>
                      <strong style={{ margin: "0 6px", color: "blue" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units_buy>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                  </PriceRow>
                  <PriceRow>
                    <Amount_units_buy>
                      <strong style={{ margin: "0 6px", color: "blue" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units_buy>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                  </PriceRow>
                  <PriceRow>
                    <Amount_units_buy>
                      <strong style={{ margin: "0 6px", color: "blue" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units_buy>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                  </PriceRow>
                  <PriceRow>
                    <Amount_units_buy>
                      <strong style={{ margin: "0 6px", color: "blue" }}>
                        18,500
                      </strong>
                      <small style={{ background: "transparent" }}>13.4%</small>
                    </Amount_units_buy>
                    <Cnt_units>
                      <Cnt_txt>
                        <span>1</span>
                      </Cnt_txt>
                    </Cnt_units>
                  </PriceRow>
                </PriceBox>
              </div>
            </div>
          </InfoBox>
          <InfoBox>
            <div>거래 내역</div>
            <Offers />
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
// 구매하기/스트리밍하기 버튼
const PageBtn = styled.button`
  ${(props) => props.theme.button.basicBtn};
  margin: 0.5rem;
  width: 12rem;
`;
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
  }
  // 박스 내용
  > :last-child {
    width: inherit;
    height: auto;
    padding: 1rem;
  }
`;

const AskingPriceUI = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  > li {
    width: 10rem;
    text-align: center;
  }
`;
const ExtraBox = styled.div`
  flex: 0 0 10rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: #999;
  font-size: 14px;
  > div {
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
  }
`;
const PriceBox = styled.div`
  flex: 2 0 0;
  display: flex;
  flex-direction: column;
`;

const PriceRow = styled.div`
  flex: 1 0 0;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

const Cnt_units = styled.div`
  border-right: 1px solid #eaeaea;
  flex: 0 0 10rem;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  color: #3449ba;
`;

const Cnt_txt = styled.div`
  z-index: 1;
  padding: 0 4px;
  width: 100%;
  text-align: center;
`;
const Amount_units = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: blue;
`;

const Amount_units_buy = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: red;
`;
export default deatil;
