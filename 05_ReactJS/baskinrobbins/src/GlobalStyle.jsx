/** 
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 ReaxtJSX에서 className 속성으로 참조한다.
 * @author:Seunga Lee(leeah0913@gmail.com)
 */

import { createGlobalStyle } from 'styled-components';

/** 
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyle = createGlobalStyle`
   

   
   *{
		font-family: 'Noto Sans KR', sans-serif;
		margin: 0;
		padding: 0;

	body{
	min-width: 1000px;
	height: 100%;
	margin: auto;
	display: block;
		a{
			text-decoration: none;
			&:visited{
				color: inherit;
			}
		}
		button{
			border: none;
			background-color: none;
		}
		ol, ul {
		list-style: none;
		}
		hr{
			border: none;
		}
    }
   }
   .bottom_nav{
			font-family: 'Jua', sans-serif;
		}
`;

export default GlobalStyle;