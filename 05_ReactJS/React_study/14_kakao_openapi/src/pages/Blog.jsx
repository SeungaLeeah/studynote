import React,{ memo, useEffect } from 'react';
import { useQueryString } from '../hooks/useQueryString';   
import { useSelector, useDispatch } from 'react-redux';
import { getKakaoSearch} from '../slices/KakaoSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const Blog = memo(() =>{
    //QueryString의 검색어 가져오기 => 아무 페이지, 컴포넌트에서 query 값을 가져올 수 있음 
    const {query} = useQueryString();
    //리덕스를 통한 검색 결과 상태 조회 => 리덕스는 검색어가 존재 할 때만 작용되야함
    const dispatch = useDispatch();
    const {meta, documents, loading, error} = useSelector((state)=> state.kakao);

    useEffect(()=>{
        dispatch( getKakaoSearch({
            api: 'blog',
            query: query,
            page: 1,
            size: 20
        }));
    }, [dispatch, query]);
    return (
      <div>
        <Spinner visible={loading}/>
        
        {/* error가 있다면 <ErrorView error={error}/> 가 실행*/}
        {error ? (
            <ErrorView error={error}/>
            /* 그 밖에 document가 있다면 <></> 안에를 실행  */
        ):document && (
            <>
                <h2>Meta</h2>
                {JSON.stringify(meta)}
                <h2>Documents</h2>
                {JSON.stringify(documents)}
            </>
        )}
      </div>
  );
});

export default Blog;