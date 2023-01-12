// 반응형
const deviceSize = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSize.mobile})`,
  tablet: `screen and (max-width: ${deviceSize.tablet})`,
  laptop: `screen and (max-width: ${deviceSize.laptop})`,
};

// 색상
const color = {
  mainColor: "#9900FF",
  subColor: "#CC66FF",
};

// 글씨 크기
const fontSize = {
  title: "3rem",
  subTitle: "1.5rem",
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
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

// 버튼
const button = {
  useButton: `  
  width: 8rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  padding: 0.7rem; 
  font-size : 1.5rem;
  &:hover {
    color: black;
    background-color: white;
  }
  `,
};

const theme = {
  color,
  fontSize,
  align,
  button,
  device,
  deviceSize,
};

export default theme;
