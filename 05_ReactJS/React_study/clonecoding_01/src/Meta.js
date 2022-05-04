/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 이승아
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from 'react'
// SEO 처리 기능 패키지
import {Helmet, HelmetProvider} from "react-helmet-async"

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns{JSX.Element}
 */
const Meta = (props) => {
  return (
      <HelmetProvider>
          <Helmet>
              <meta charSet="utf-8"/>
              <meta name="description" content={props.description} />
              <meta name="keywords" content={props.keywords} />
              <meta naem="author" content={props.author} />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={props.title} />
              <meta property="og:description" content={props.description}/>
              <meta property="og:url" content={props.url}/>

              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
              <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Serif+KR:wght@200;300;400;600;700;900&display=swap" rel="stylesheet"/>
          </Helmet>
      </HelmetProvider>
  );
};

/** 
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title:string, url:string}}
 */
Meta.defaultProps ={
    title: 'Clone Coding 01',
    description: "React.js로 구현한 클론코딩01 페이지 입니다.",
    keywords: 'React,CloneCoding',
    //image: '기본이미지변수적용',
    url: window.location.href
};

export default Meta;