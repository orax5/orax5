// 색상
const color = {
  mainColor: "#9900FF",
  subColor: "#CC66FF",
  fontColor: "#9933CC",
};

// 글씨 크기
const fontSize = {
  title: "2rem",
  subTitle: "1rem",
  text: "0.8rem",
};

// 정렬
const align = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  color,
  fontSize,
  align,
};

export default theme;

