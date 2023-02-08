import React, { useState } from "react";
import Link from "next/Link";
import styled from "styled-components";
import Image from "next/image";
import axios from "axios";

const index = () => {
  const [uploadedImg, setUploadedImg] = useState("/Img/sample.jpg");
  // 이미지 올리는 함수
  const handleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };

    const formData = new FormData();
    formData.append("uploadedImg", file);
    try {
      const imageRes = await axios({
        url: "http://localhost:3001/uploadS3/image",
        method: "post",
        data: { formData, headers: { "Content-Type": "multipart/form-data" } },
      });
      const imageURL = imageRes.data.imageURL;
      console.log(imageURL);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainContainer>
      <div></div>
      <MainArea>
        <Image src={uploadedImg} width={400} height={400} alt="uploadedImg" />
        <input
          type="file"
          name="image_URL"
          id="selectImage"
          accept="image/*"
          onChange={handleImage}
        />
        <button>
          <Link href="/creator/register/detailForm">
            제출 및 다음 단계로 이동
          </Link>
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
