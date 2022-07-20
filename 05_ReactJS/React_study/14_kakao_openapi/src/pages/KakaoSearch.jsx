import React,{ memo, useEffect } from 'react';
import styled from 'styled-components';
// qureystring을 가져옴
import { useQueryString } from '../hooks/useQueryString';   
// params로 path파라미터를 가져옴
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getKakaoSearch} from '../slices/KakaoSlice';
import { useInView } from "react-intersection-observer";

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import GoTop from '../components/GoTop';

//Item들은 li태그를 styled component로 확장한 것
import ListItem from '../components/ListItem';
import ImageItem from '../components/ImageItem';

// kakaoSearch는 ul태그를 styled component로 확장한 것
const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    //검색 결과에서 api가 image이면 row 아니면 colum으로 정렬됨
    flex-direction: ${props => props.api === 'image'? 'row' : 'column'};
    flex-wrap: wrap;
    margin-bottom: 300px;
`;
const KakaoSearch = memo(() =>{

    // http:// ~~~ /web(=api) ? query: 검색어을 뜻함으로 params는 api를 QueryString은 검색어를 불러옴
    //path api 파라미터 받아오기 => 이렇게 하면 5개의 페이지를 하나로 불러올 수 있고, 
    // 또한 query 값도 api path를 통해 페이지별로 바꿀 수 있다
    const {api} = useParams();
    //QueryString의 검색어 가져오기 => 아무 페이지, 컴포넌트에서 query 값을 가져올 수 있음 
    const {query} = useQueryString();

    //리덕스를 통한 검색 결과 상태 조회 => 리덕스는 검색어가 존재 할 때만 작용되야함(ajax 처리)
    const dispatch = useDispatch();
    const {meta, documents, loading, error} = useSelector((state)=> state.kakao);
console.log(documents);
    //페이지 번호 상태값
    const [page, setPage] = React.useState(1);
    //무한 스크롤 관련(ref(참조변수) inView(boolean)변수를 가져옴)
    const [ref, inView] = useInView();
    //page번호는 파라미터로 받는다 = 1페이지
    const getContent = React.useCallback((p=1)=>{
        // 어디를 로딩하는건지 log찍고
        console.log(`api=${api}, page=${p}`);
        //setPage(p) 상태값으로 감지 = 초기 상태값은 1
        setPage(p);
        dispatch(getKakaoSearch({
            api: api,
            query: query,
            //page번호를 변수화 시킴
            page: p,
            size:api ==='image' ? 80 : 50
        }));
    },[dispatch, api, query]);
    //검색어가 전달되었을 경우 hook
    useEffect(()=>{
        //페이지가 열리면 맨 위로 보낸다음 페이지 1
        window.scrollTo(0, 0);
        //1) getContent(1)이 (p=1)로 값을 보내고, 
        //2) (p=1)이 setPage(p) 와 page:p로 값을 보내 1페이지 상태를 설정
        //3)setPage(p) 값을 getContent(page+1)에 대입하면 2가 됨
        //4)그 값을 다시 (p=1)로 보냄. 
        //1~4이 계속 반복되면서 무한 스크롤이 됨
        getContent(1);
    },[getContent, api, query]);
    //사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    useEffect(()=>{
        //loading이 아닐 경우에만
        if(inView && !loading){
            getContent(page+1);
        }
        // inView(boolean)를 요청하면 page +1
    },[getContent, inView, loading, page]);
    return (
      <div>
        <Spinner visible={loading}/>
        <GoTop/>
        
        {/* error가 있다면 <ErrorView error={error}/> 가 실행*/}
        {error ? (
            <ErrorView error={error}/>
            /* 그 밖에 document가 있다면 <></> 안에를 실행  */
        ):documents && (
            //ListContainer는 ul태그를 뜻함
            // ListContainer api 값을 설정해서 styled component에서 props 값이 설정됨
            <ListContainer api={api}>
                {documents.map((v,i)=>{
                return api === 'image' ? (
                    //ImageItem은 이미지 전용
                    <ImageItem key={i} type={api} item={v}
                    //li태그 중 맨 마지막 요소에게 ref 속성을 지정하고 참조객체를 연결함 ref가 참조객체임
                    // {}괄호는 jsx문법에서 자바스크립트를 쓰기위해 사용하는 괄호이고, ...()는 ()안에 모든게 복제가 됨
                    {...(!meta?.is_end && !loading && documents.length -1 === i ? { inview: ref}:{})}/>
                    //마지막 인덱스는 documents.length -1까지만 존재함 documents.length -1값이 현재 인덱스와 같다면
                    //{}안에서 어떤 props를 조건에 따라 명시하고 싶다면, props를 Json으로 {inView(props이름): ref(props값)} 제시하면 inView={ref}으로 바뀜
                ) : (
                    //ListItem은 통합(이미지 외 모든 것들에 적용됨)
                    <ListItem key={i} type={api} item={v}
                    {...(!meta?.is_end && !loading && documents.length -1 === i ? { inview: ref}:{})}/>
                )
            })}
            </ListContainer>
        )}
      </div>
  );
});

export default KakaoSearch;