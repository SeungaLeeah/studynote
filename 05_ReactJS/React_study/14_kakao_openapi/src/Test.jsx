import React,{memo} from 'react'


import { useSelector, useDispatch } from 'react-redux';
import { getKakaoSearch } from './slices/KakaoSlice';

const Test =memo(()=>{
  const dispatch =useDispatch();
  //const {meta, documents, loading, error} = useSelector((state)=> state.kakao) => 상태값 뽑아오기
  const {meta, documents, loading, error} = useSelector((state)=> state.kakao);

  React.useEffect(()=>{
    dispatch(getKakaoSearch({
      api:'blog',
      query: '프론트엔드',
      page: 1,
      size: 20
    }))
  },[dispatch])

  return (
    loading ? "loading..." :(
      /* JSON.stringify란? =>  JavaScript 값이나 객체를 JSON 문자열로 변환 */
      error ? JSON.stringify(error): (
        <>
          <h1>Meta</h1>
          {JSON.stringify(meta)}
          <h1>Documents</h1>
          {JSON.stringify(documents)}
        </>
      )
    )
  )
});

export default Test;