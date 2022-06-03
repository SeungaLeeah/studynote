import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL={
  // 카카오는 meta와 document 기본 구조가 같음으로 5개를 하나의 슬라이스로 불러옴
  // https 는 보안문서 임으로 기존의 http와 다름, book만 v3로 다르다.
  web: "https://dapi.kakao.com/v2/search/web",
  blog: "https://dapi.kakao.com/v2/search/blog",
  cafe: "https://dapi.kakao.com/v2/search/cafe",
  book: "https://dapi.kakao.com/v3/search/book",
  image: "https://dapi.kakao.com/v2/search/image",
};

// 발급 받은 API 키 준비
const API_KEY = 'cd848075b9839c768c713e6ca8cd056a';
// params 값이  async(payload)로 전달됨.
/** 전달되는 params  전달되는 형태
 * {
 * api: 'blog' () => axios.get(API_URL[payload.api ? payload.api:'web'] 이걸로 API를 파라미터로 받음
 * query: '~~~'
 * sort: "~~~"
 * size: 20,
 * page:1
 * }
 */
export const getKakaoSearch = createAsyncThunk("KakaoSlice/getKakaoSearch", async(payload,{rejectWithValue})=>{
  let result = null;

  try{
    result = await axios.get(API_URL[payload.api ? payload.api:'web'],{
      params:{
        query: payload.query,
        sort: payload.sort ? payload.sort: null,
        page:payload.page ? payload.page: 1,
        size: payload.size ? payload.size : 20
      },
      headers: {Authorization: `KakaoAK ${API_KEY}`}
    });
  }catch(err) {

    result = rejectWithValue(err.response);
  }
  return result;
});


const KakaoSlice = createSlice({
  name: 'kakao',
  initialState: {
    meta: null,
    documents: null,      
    loading: false,   
    error:null        
  },

  reducers: {},
  extraReducers: {
    [getKakaoSearch.pending]: (state, {payload})=>{
      return{...state, loading:true}
    },
    /* meta.arg(page, query, size들이 모여있는 곳) => axios에 전달한 get 파라미터를 확인할 수 있다 */
    [getKakaoSearch.fulfilled]: (state,{meta, payload})=>{
      return{
  // 백엔드가 주는 결과를 원덱스로 맞춰서 상태값을 로딩과 에러 빼고 맞춰라
  // meta:payload?.data?.meta => payload가 존재한다면 data에 접근해서 그 data가 존재 한다면 meta를 가져와라
        meta:payload?.data?.meta,
        documents: meta.arg.page > 1 ? state.documents.concat(payload?.data?.documents) : payload?.data?.documents,
        loading: false,
        error: null
      }
    },
    [getKakaoSearch.rejected]: (state,{payload})=>{
      return{
        // 에러가 났으면 다 null로 해도 됨. 어차피 에러가 났기 때문에
        meta: null,
        documents: null,  
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    }
  }
  
});

export default KakaoSlice.reducer;