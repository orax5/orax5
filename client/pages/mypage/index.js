import React, {useState, useEffect} from "react";
import styled from "styled-components";

const index = () => {
  // 클립보드 카피 되었다는 표시 알려줄려고 셋타임아웃state 관리용useState
  const [clipAccount, setClipAccount] = useState(false)

  const copyClipBoardHandler = async (text) => {
    setClipAccount(true); // 트루 값 먼저주고
    setTimeout(()=>{setClipAccount(false)}, 2000); // 2초뒤에 다시 폴스 
    try {
      await navigator.clipboard.writeText(text);
      // alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      // alert('복사에 실패하였습니다');
    }
  }


  return (
    <div>
      안녕하세요
    </div>
  )
};

const StateBoard = styled.div`
    width: 300px;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2,200px);
    grid-template-rows: repeat(2,25px);
    row-gap: 10px;
    column-gap: 20px;
`

const AssetsState = styled.div`

`


export default index;
