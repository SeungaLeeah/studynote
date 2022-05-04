/** 
 * @fliename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일 시트.
 *                이 파일에서 정의한 class는 ReactJSX에서 className속성으로 참조해야 한다.
 * @author: 이승아
 */
/** 패키지 참조 */
import {createGlobalStyle} from 'styled-components';

/**
 * 
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
}
  p{
    font-family: 'Noto Serif KR', serif;
  }
  h1,
  h4{
    font-family: 'Hind Siliguri', sans-serif;
  }
`;

export default GlobalStyle;