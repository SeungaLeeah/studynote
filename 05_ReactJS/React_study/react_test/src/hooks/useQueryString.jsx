import {useLocation} from 'react-router-dom';

const useQueryString = ()   =>{
    //QueryString 문자열 추출함
    const {search} = useLocation();
    //QueryString 문자열을 객체로 변환
    const params = new  URLSearchParams(search);
    // 모든 key와 value의 쌍을 for...in 반복문으로 처리 가능한 [key, value]쌍의 배열로 반환함.
    // params.entries()는 반복문을 돌릴 수 있는 객체가 됨
    const entries = params.entries();
    const result ={}
    
    // 추출한 배열을 반복문으로 처리하여 JSON객체로 변환함
    for(const [key, value] of entries){  // each 'entries' is a [key, value]
        // 리턴할 빈 객체에 key와 value을 쌓은 후
        result[key] = value;
    }
    // 리턴해줄 때 hook을 하나 만듦
    return result;
};

export {useQueryString};