import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/Link";
import styled from "styled-components";
import Image from "next/image";
import { uploadImage } from "../../../redux/modules/funding";
import { useRouter } from "next/router";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [uploadedImg, setUploadedImg] = useState("/Img/sample.jpg");
  const [sendImg, setSendImg] = useState();

  // 이미지 올리고 미리보기
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSendImg(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
  };

  const uploadBtn = () => {
    const formData = new FormData();
    formData.append("uploadedImg", sendImg);
    dispatch(uploadImage(formData));
    console.log(sendImg);
    // s3에 dispatch가 성공하면? 보내지도록처리
    // router.push("/creator/register/detailform");
  };

  return (
    <MainContainer>
      <div></div>
      <MainArea>
        <Image
          src={uploadedImg}
          width={400}
          height={400}
          alt="uploadedImg"
          style={{ borderRadius: "50%" }}
        />
        <input
          type="file"
          name="image_URL"
          id="selectImage"
          accept="image/*"
          onChange={handleImage}
        />
        <button onClick={uploadBtn}>제출 및 다음 단계로 이동</button>
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
