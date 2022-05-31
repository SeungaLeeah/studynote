import React,{ memo } from 'react';
import styled from 'styled-components';

//import axios from 'axios';
// 리덕스가 axios 역할을 다 해줌으로 사용을 안함

import { useSelector, useDispatch } from 'react-redux';
import { getNewsList } from '../slice/NewsSlice';
import NewsItem from '../components/NewsItem';
import Spinner from '../components/Spinner';

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

const News = memo(() =>{
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.news); 
    // 2. data가 있다는 것을 확인 했으니, data를 가지고 반복문을 돌리면 된다.

    //1. data가 잘 들어와 있는지 개발자 도구에서 확인을 먼저 하기
    React.useEffect(()=>{
        dispatch(getNewsList());
    }, [dispatch]);
    
    return (
      <div>
            <Spinner visible={loading}/>
            {/* error가 있다면 에러를 아니면 data 값을 불러오기 */}
        {error ? (
            <div>
                <h1>Oops~!! {error.code} Error. </h1>
                <hr/>
                <p>{error.message}</p>
            </div>
        ) : (
          <ListContainer>
              {/* data && data는 데이터가 있다면 반복문 실행함 */}
              {data && data.map((v,i)=> <NewsItem key={i} item={v}/>)}
          </ListContainer>
          )}  
      </div>
  );
});

export default News;