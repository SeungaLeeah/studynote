import React from 'react'
import styled from 'styled-components';
import NewsData from '../NewsData';
import NewsItem from '../components/NewsItem';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const NewsList = () => {
    console.clear();

    return (
    <div>
        <ListContainer>
            {/* {NewsData.map((v,i)=>{      => 반복하면서 콜백함수를 걸고,
                    return(                 => 리턴을 위한 함수가 1개라면 생략 가능.
                        <NewsItem key={i} item={v} /> 
                )
                })} => 처음과 마지막 {} 괄호는 문법을 표현하기 위한 괄호이다. */}
            {NewsData.map((v,i)=><NewsItem key={i} item={v} /> )}
            {/* NewsItem의 item 분리를 하는 과정
                const NewsItem = (porps)=>{
                    const {item} = porps;은 같은 의미이다.
                    const {url, image, title, description, author, datetime} =item;과
                    같은 의미이다. 문법이 2중으로 되어있기 때문에 이렇게 분리할 수 있다.
                    }; 
            이 과정을 간소화 시키면, item(v)가 porps에 들어감으로 => 
            const NewsItem = ({item:{url, image, title, description, author, datetime}}) ={     
            };

                    */}
        </ListContainer>
    </div>
  )
}

export default NewsList