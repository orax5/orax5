## 설치한 모듈

redux
react-redux
redux-thunk
styled-components
babel-plugin-styled-components
axios
@mui/icons-material

## 출처

메인 우주 애니메이션: https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010

## 이슈

- 오류 : Prop `className` did not match
  <br>
- 해결 : babel-plugin-styled-components : 식별자 생성 과정을 정규화해준다
  <hr>
- 오류 : (콘솔창) Please add the "priority" property if this image is above the fold.
  <br>
- 해결 : 이미지 속성에 priority={true} 추가
  <hr>
- 오류 : (콘솔창) Prop `className` did not match.
- 해결 : npm i babel-plugin-styled-component,  .babelrc 파일에 "plugins": [
    [
      "babel-plugin-styled-components", 
      {
        "ssr": true, // SSR을 위한 설정
        "displayName": true, // 클래스명에 컴포넌트 이름을 붙임
        "pure": true // dead code elimination (사용되지 않는 속성 제거)
      }
    ]
<hr>
- 오류 : Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead.
<br>
- 해결 : 