import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { uploadImage } from "../../../redux/modules/funding";
import { useRouter } from "next/router";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [uploadedImg, setUploadedImg] = useState("/transparent.png");
  const [sendImg, setSendImg] = useState();
  const [rejectCase, setRejectCase] = useState(true);

  // 이미지 올리고 미리보기
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const filename = file.name;
    const filesize = file.size;
    if (!/\.(jpg|png)$/i.test(filename)) {
      alert(`확장자가 jpg, png인 파일만 업로드 가능합니다. 현재 파일 : ${file.name}`);
      setRejectCase(true);
    } else if (filesize > 10 * 1024 * 1024) {
      alert(
        `10MB 이하 파일만 등록할 수 있습니다 현재파일 용량 : ${Math.round((filesize / 1024 / 1024) * 100) / 100 + "MB"}`
      );
      setRejectCase(true);
    } else {
      setRejectCase(false);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        setUploadedImg(e.target.result);
      };
      setSendImg(file);
    }
  };

  const uploadBtn = () => {
    if (sendImg == null) {
      alert("이미지를 등록해주세요");
    } else {
      const imageName = sendImg.name;
      const singTitle = imageName.substring(0, imageName.length - 4);
      const formData = new FormData();
      formData.append("uploadedImg", sendImg);
      /// formData의 value값 찍어봄
      // let keys = formData.values();
      // for (const pair of keys) {
      //   console.log(pair);
      // }
      let entries = formData.entries();
      for (const pair of entries) {
        console.log(pair[0] + ", " + pair[1]);
      }

      dispatch(uploadImage(formData))
        .then((res) => {
          router.push("/creator/register/detailForm");
        })
        .catch((err) => {
          console.log(err);
        });

      // s3에 dispatch가 성공하면? 보내지도록처리
    }
  };

  return (
    <MainContainer>
      <div></div>
      <MainArea>
        <h1>크리에이터 펀딩 신청폼</h1>
        <hr
          style={{
            height: "1px",
            width: "60vw",
            background: "white",
            margin: "0.5rem 0",
          }}
        />
        <h2>1. 앨범아트를 등록해주세요</h2>
        <Preview>
          <Image
            src={uploadedImg}
            width={450}
            height={450}
            alt="uploadedImg"
            style={{
              position: "relative",
              top: "1.4rem",
              left: "4rem",
            }}
          />
          <Image
            src="/cover.png"
            width={530}
            height={487}
            alt="uploadedImg"
            style={{
              position: "relative",
              bottom: "30rem",
            }}
          />
        </Preview>

        <input type="file" name="image_URL" id="selectImage" accept="image/*" onChange={handleImage} />
        <Warning>
          <p>
            ※ 등록한 이미지는 해당 곡의 앨범 아트와 NFT 이미지로 사용되며,
            <b>추후 수정이 절대 불가합니다</b>.
          </p>
          <p>※ jpg/png 형식의 파일만 업로드 가능하며, 이미지 가로/세로 차이가 클 경우 이미지가 깨질 수 있습니다.</p>
        </Warning>
        {rejectCase == false ? (
          <button onClick={uploadBtn}>제출 및 다음 단계로 이동</button>
        ) : (
          <button disabled={true}>파일을 업로드 해주세요</button>
        )}
      </MainArea>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const Preview = styled.div`
  width: 36rem;
  height: 33rem;
  overflow-y: hidden;
  @media ${(props) => props.theme.device.mobile} {
    width: 26rem;
    height: 23rem;
  }
  > img:first-child {
    @media ${(props) => props.theme.device.mobile} {
      width: 20.2rem;
      height: 20.2rem;
      position: relative;
      top: 2rem;
      left: 2.2rem;
    }
  }
  > img:last-child {
    @media ${(props) => props.theme.device.mobile} {
      width: 23rem;
      height: 21.8rem;
      position: relative;
      bottom: 0;
      top: -19.8rem;
      left: 2rem;
    }
  }
`;
const Warning = styled.div`
  font-size: 1.2rem;
  margin: 1.5rem 0;
  @media ${(props) => props.theme.device.mobile} {
    width: 22rem;
  }
`;
const MainArea = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};

  > input {
    border: none;
    margin-left: 2rem;
  }
  > button {
    border: 1px solid white;
    width: 40rem;
    height: 3rem;
    font-size: 1.2rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 22rem;
    }
  }
  > button:hover {
    background-color: white;
    color: black;
  }
`;
export default index;
