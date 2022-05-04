/**
 * 배열 데이터를 자체적으로 처리하는 경우
 */

import React from 'react';
import styled from 'styled-components'; 
import NewsData from '../NewsData';

/* 
1. import styled from 'styled-components'; 는 자바스크립트 파일이 
표현하는 항목에 대해서 css와 js를 한 파일에서 같이 사용하자는 의미
css 코드를 의미==> const CardContainer = styled.ul` 
2. styled-components는 랜덤화된 클래스를 적용한 HTML 코드를 만들어 주는 것*/

const CardContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 30px;

    .card-item{
        width: 320px;
        flex:none;  
        border:1px solid #d5d5d5;
        margin: 10px 5px;

        .list-item-link{
            box-sizing: border-box;
            width:100%;
            display:flex;
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #000;
            transition: all 0.1s;

            &:hover{
                background-color:#eeeeee55;
            }
            .thumbnail{
                width: 100%;
                height: 150px;
                display: block;
                object-fit: cover;
                flex: none;
            }
            
            .content{
                flex: 0 1 auto;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                padding: 10px 15px;
                background-color: #ff01;

                h3{
                    background-color: #f0f1;
                    box-sizing: border-box;
                    font-size:18px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 10px;

                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p{
                    background-color: #0601;
                    font-size: 14px;
                    margin: 0;
                    margin-bottom:8px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
                ul{
                    background-color: #0061;
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li{
                        display: inline-block;
                        font-size:12px;

                        &:first-child::after{
                            content: '|';
                            display: inline-block;
                            color: #555;
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
`; 


const NewsList = () => {
    console.clear();

  return (
    <div>
        <CardContainer>
            {/* {} 안은 코드작성하는 영역(변수도 가능) */}
            {NewsData.map((v,i)=>{
                /* v(배열의원소)가 반복문을 돌면 
                ==> const {url, image, title, description, author, datetime}와 같은 의미로
                ex)  <h3>{v.title}</h3>로 앞에 v를 작성해서 변수 없이 해도 됨
                 여기서, 코드를 조금 더 축약을 한다면 
                => {NewsData.map(({url, image, title, description, author, datetime},i)=>{  해도 됨*/
                const {url, image, title, description, author, datetime}=v;
                return(
                    <li className='card-item' key={i}>
                        <a className='list-item-link' href={url} target="_blank" rel='noreferrer'>
                           <img className='thumbnail' src={image} alt={title}/>
                            <div className='content'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <ul>
                                    <li>{author}</li>   
                                    <li>{new Date(datetime).toLocaleDateString()}</li>
                                </ul>
                            </div>
                        </a>
                    </li>
                );
            })}
        </CardContainer>
    </div>
  );
};
export default NewsList;
