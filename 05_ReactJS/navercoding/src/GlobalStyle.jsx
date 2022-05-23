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
         width: 100%;
         box-sizing: border-box;
         
         body{
         height: 100%;
         margin: auto;
        width: 460px;
        display: block;
        background-color: #f3f3f9;
         }
         button{
             border: none;
             cursor: pointer;
             background-color: #03c75a;
                color: white;
         }
         ol, ul {
         list-style: none;
         }
         hr{
             border: none;
         }
        
         option{
             font-weight: 100;
             padding-left: 50px;
             
         }
       
        .center{
            margin: 15px 0;
        }
            .title{
            font-size: 14.5px;
            font-weight: 400;
            text-align: left;
            letter-spacing: 0.5px;
            
            }
            .inputBox{
            margin: auto;
            height: 50px;
            border: 1px solid #d5d5d5;
            padding-left: 10px;
            font-weight: 100;
            font-size: 15px;
            cursor: pointer;
            }

            p{
                display: inline;
                color:#ADB1B0;
                font-weight: 100;
                width: 460px;
                text-align: left;
            }
                .icon{
                position: absolute;
                margin: left;
                text-align: left;
                font-size: 25px;
                font-weight: 100;
                width: 460px;
                }
            


        .text-blind{
            overflow: hidden;
            display: inline-block;
            position: relative;
            z-index: -1;
            border: 0;
            width: 1px;
            height: 1px;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: inset(50%);
        }
        
    }

 `;
 
 export default GlobalStyle;