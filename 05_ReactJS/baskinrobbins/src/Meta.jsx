/**
 * @filename: Meta.jsx
 * @description <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Seunga Lee(leeah0913@gmail.com)
 */
import logo from './asset/img/logo.png';
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
                <meta property='og:image' content={props.image}/>

                <link rel='shortcut icon' href={props.image} type="image/png"/>
                <link rel='icon' href={props.image} type="image/png"/>

                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
            </Helmet>
        </HelmetProvider>
        </div>
  );
};

Meta.defaultProps={
    title:"배스킨라빈스",
    description: 'Baskin Robbins clone by ReactJs',
    keywords:'React',
    author:'Seunga Lee',
    image: logo,
    url: window.location.href
};

export default Meta;