import React,{memo, useCallback} from 'react'
import {useNavigate} from 'react-router-dom';
import { useQueryString} from '../hooks/useQueryString';
import styled from 'styled-components';

import MenuLink from './MenuLink';

const Form = styled.form`
  background-color: #fff;
  display: flex;
  border-top: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;

  input, button{
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }

  input{
    flex: 1;
  }
  button{
    width: 70px;
    flex: none;
  }
`;

const Top=memo(()=> {
  const navigate = useNavigate();
  
/**
const qs = useQueryString();
console.log(qs);
const query =qu.query;
/*/
const {query} = useQueryString();
/**/

// 검색어가 입력되면
const onSearchSubmit=useCallback((e)=>{
  e.preventDefault();
  // web.query params에 target값을 실어서 보냄
  navigate(`/web?query=${e.target.query.value}`);
},[navigate]);

  return (
    <div>
      <h1>카카오 검색</h1>

      <Form onSubmit={onSearchSubmit}>
        <input type='search' name='query' defaultValue={query} />
        <button type='submit'>검색</button>
      </Form>
      {/* query가 있다면 메뉴를 노출하면서 query로 다른 페이지로 파생 */}
      {query && (
        <nav>
          {/* 한글은 무조건 encodeURIComponent을 해줘야함 */}
          <MenuLink to={`/web?query=${encodeURIComponent(query)}`}>웹</MenuLink>
          <MenuLink to={`/image?query=${encodeURIComponent(query)}`}>이미지</MenuLink>
          <MenuLink to={`/blog?query=${encodeURIComponent(query)}`}>블로그</MenuLink>
          <MenuLink to={`/cafe?query=${encodeURIComponent(query)}`}>카페</MenuLink>
          <MenuLink to={`/book?query=${encodeURIComponent(query)}`}>책</MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
