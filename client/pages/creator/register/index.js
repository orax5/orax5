import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const index = () => {
  return (
    <MainContainer>
      <div></div>
      <MainArea>
        <Image
          src="/Img/sample.jpg"
          alt="detail_page_image"
          width={500}
          height={500}
        />
        <input type="file" />
        <button>
          <Link href="/creator/register/detailForm">다음 단계로 이동</Link>
        </button>
      </MainArea>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const MainArea = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
`;
export default index;
