// 반응형 화면사이즈 설정
const deviceSize = {
  mobile: "425px",
  tablet: "768px",
  pc: "1024px",
};

// 기기별 max-width 설정
const device = {
  mobile: `screen and (max-width: ${deviceSize.mobile})`,
  tablet: `screen and (max-width: ${deviceSize.tablet})`,
  pc: `screen and (max-width: ${deviceSize.pc})`,
};

// 전체 페이지 그리드 레이아웃
const gridLayout = {
  navGrid: `
    width: 100vw;
    height: 10vh;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 8fr 1fr 1fr;
    margin: 1rem 0 1rem 1rem
  `,
  mainGrid: `
    width: 100vw;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 8fr 1fr;
  `,
  sideMenuGrid: `
  display: grid;
  grid-template-rows : 15vh 75vh;
  place-items: center;
  `,
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
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexStart: `
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
  `,
};

// 버튼
const button = {
  basicBtn: `  
  width: 8rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  font-size : 1.2rem;
  &:hover {
    color: black;
    background-color: white;
  }
  `,
  smallBtn: `  
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background-color: transparent;
  font-size : 0.8rem;

  `,
};

const theme = {
  device,
  deviceSize,
  gridLayout,
  color,
  fontSize,
  align,
  button,
};

export default theme;
