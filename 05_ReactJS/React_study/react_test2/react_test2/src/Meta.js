import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import sample from './assets/img/sample.png';

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
            <meta name='og:image' content={props.image}/>
            <link rel='shortcut icon' href={props.image} type='image/png' />
            <link rel='icon' href={props.image} type="image/png"/>
        </Helmet>
    </HelmetProvider>
  );
};
    Meta.defaultProps={
        title: 'React 시험 ',
        description: 'Covid19 data를 활용한 React 시험입니다.',
        author:'이승아',
        image:sample,
        url:window.location.href
    };

export default Meta