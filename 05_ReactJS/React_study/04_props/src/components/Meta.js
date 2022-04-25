import React from 'react';
import {Helmet} from 'react-helmet';
import sample from "../assests/img/sample.png";

const Meta = (props) => {
    return(
        <Helmet>
            <meta charset='utf-8'/>
            <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name='description' content={props.description}/>
            <meta name='keywords' content={props.keywords}/>
            <meta name='author' content={props.author}/>
            <meta name='og:type' content='website'/>
            <meta name='og:title' content={props.title}/>
            <meta name='og:description' content={props.description}/>
            <meta name='og:image' content={props.image}/>
            <meta name='og:url' content={props.url}/>
            
            <link rel='shortcut icon' href={props.image} type='image/png'/>
            <link rel='icon' href={props.image} type='image/png'/>

            {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
        </Helmet>
    );
};

Meta.defaultProps={
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: '호쌤',
    image: sample,
    url: window.location.href
};

export default Meta;