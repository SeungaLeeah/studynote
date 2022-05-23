/**
 * @filename: Meta.jsx
 * @description <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Seunga Lee(leeah0913@gmail.com)
 */
 import React from 'react';
 // SEO 처리기능 패키지
 import { Helmet,HelmetProvider } from 'react-helmet-async';
 
 /** SEO 처리 컴포넌트
  * @param props
  * @returns{JSX.Element}
  */
 
 const Meta = (props) => {
   return (
       <div>
         <HelmetProvider>
             <Helmet>
                 <meta charset='utf-8'/>
                 <title>{props.title}</title>
                 {/* SEO태그 */}
                 <meta name='description' content={props.description} />
                 <meta name='keywords' content={props.keywords} />   
                 <meta name='author' content={props.author} />
                 <meta property='og:type' content='website' />
                 <meta property='og:title' content={props.title} />
                 <meta property='og:description' content={props.description} />
                 <meta property='og:url' content={props.url} />
 
                 <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
            </Helmet>
         </HelmetProvider>
         </div>
   );
 };
 
 Meta.defaultProps={
     title:"Naver",
     description: 'Naver clone by ReactJs',
     keywords:'React',
     author:'Seunga Lee',
     url: window.location.href
 };
 
 export default Meta;