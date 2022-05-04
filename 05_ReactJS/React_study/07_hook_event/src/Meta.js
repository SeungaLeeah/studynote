import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Meta = (props) => {
  return (
      <HelmetProvider>    
        <Helmet>
            <meta charSet='utf-8'/> 
            {/* SEO 태그 */}
            <title>{props.title}</title>
            <meta name='description' content={props.description}/>
            <meta name='keywords' content={props.keywords}/>
            <meta name='author' content='website'/>
            <meta name='og:type' content={props.title}/>\
            <meta name='og:description' content={props.description}/>
            <meta name='og:url' content={props.url}/>
            {/* <meta name='og:image' content={props.image}/> */}
            
            {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>

            {/* Helmet 안에서 CSS 적용하기 */}
            {/* CSS 적용 시, {``}를 사용하여 묶어줘야 한다. */}
            <style type='text/css'>{`
            *{
                font-family: 'Noto Sans', sans-serif;
            }
            body{
                margin:0;
                padding: 30px;
            }
            `}</style>
        </Helmet>
    </HelmetProvider>
    
  );
};
    Meta.defaultProps={
        title: 'React Example',
        description: 'React.js 예제입니다.',
        author:'호쌤',
        //image:'기본이미지변수 적용',
        url:window.location.href
    };

export default Meta