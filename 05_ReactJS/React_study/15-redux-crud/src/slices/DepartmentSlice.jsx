import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

const API_URL = "http://localhost:3001/department";

/** 다중행 데이터 조회를 위한 비동기 함수 (게시판 목록조회) */
//DepartmentSlice안에 /getList를 만든다는 의미 
export const getList = createAsyncThunk("DepartmentSlice/getList",async(payload,{rejectWithValue})=>{

    let result = null;
    
    const params={};
    
    if(payload?.dname){
        params.dname = payload.dname;
    }
    
    try{
        result = await axios.get(API_URL,{
        params: params
    });
    //에러가 나면 catch가 실행됨
  }catch(err) {
    console.error(err);
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 (게시판 읽기 기능) */
// dispatch(getItem({id: 101}));
export const getItem = createAsyncThunk("DepartmentSlice/getItem", async(payload,{rejectWithValue})=>{
        //payload.id
        //http://localhost:3001/department = API_URL에 들어있음
        // `${API_URL}/${payload.id}`
        let result = null;
        try{
            result = await axios.get(`${API_URL}/${payload.id}`);
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});

/** 데이터 저장을 위한 비동기 함수 POST */
// dispatch(postItem({dname:'hello', loc: 'world'})) ==> payload 안으로 들어옴
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async(payload,{rejectWithValue})=>{
        let result = null;
   //post부터는 params를 벗겨내고 다이렉트로 값이 들어옴 
        try{
            result = await axios.post(API_URL,{
                dname: payload.dname,
                loc: payload.loc
            });
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});

/** 데이터 수정을 위한 비동기 함수 PUT */
// dispatch(putItem({id:101, dname:'hello', loc: 'world'})) ==> id가 101번 데이터를 name을 hello loc을 world로 바꿔라가 됨
// id로 조회를 하는 경우  `${API_URL}/${payload.id}` 값을 묶어서 조회를 해야함
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async(payload,{rejectWithValue})=>{
        let result = null;
        try{
            //${payload.id} 어떤 데이터를 수정할지 알려주고 ,
            //{dname: payload.dname,loc: payload.loc}) 어떻게 수정할지 알려줘야함
            result = await axios.put(`${API_URL}/${payload.id}`,{
                dname: payload.dname,
                loc: payload.loc
            });
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});

/** 데이터 삭제을 위한 비동기 함수 DELETE */
// dispatch(putItem({id:101})) --> 무엇을 지울지만 알려주면 된다.
export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async(payload,{rejectWithValue})=>{
        let result = null;

        try{
            result = await axios.delete(`${API_URL}/${payload.id}`);
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});

const DepartmentSlice = createSlice({
  name: 'DepartmentSlice',
  initialState: {
    data: null,       
    loading: false, // 로딩상태를 관리하기 위한 상태 메세지
    error:null,     // 에러 여부를 관리하기 위한 상태 메세지
    rt: null,
    rtmsg: null,
    pagenation: null,
    item: null,
    pubdate: null        
  },
  reducers: {},
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: (state, {payload})=>{
        return{...state, loading: true}
    },
    //성공시 실행되는 액션함수
    [getList.fulfilled]: (state,{payload})=>{
        return{
            data: payload?.data,
            loading: false,
            error: null
        }
    },
    // 실패시 실행되는 액션함수
    [getList.rejected]: (state,{payload})=>{
        return{
            ...state,
            loading:false,
            error: {
                code: payload?.status ? payload.status : 500,
                message: payload?.statusText ? payload.statusText : 'Server Error' 
            }
        }
    },

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: (state, {payload})=>{
        return{...state, loading: true}
    },
    [getItem.fulfilled]: (state,{meta, payload})=>{
     /*    let data = null;
        
        // 기존에 저장되있던 데이터는 state로 들어옴
        // state.data에 들어있는 데이터가 배열이 맞다면,
        // 상태값이 들어있는 데이터를 미리 준비한 빈 배열에 복사
        if (Array.isArray(state.data)) {
            data =[...state.data];

            //findIndex는 배열의 원소들을 콜백함수 파라미터로 하나씩 던저준다.
            const index = data.findIndex(element => element.id === meta.arg.id);

            if(index !== undefined){
                data.splice(index, 1, payload.data);
            }
        }else{
            //형식을 맞춰주기 위해 
            data=[payload.data];
        }
        return{
            data: data,
            loading: false,
            error: null
        } */
        return{
            data: payload.data,
            loading: false,
            error: null
        }
    },
    [getItem.rejected]: (state,{payload})=>{ return{
        ...state,
        loading:false,
        error: {
            code: payload?.status ? payload.status : 500,
            message: payload?.statusText ? payload.statusText : 'Server Error' 
        }
    }
},
    /** 데이터 저장를 위한 액션 함수 */
    [postItem.pending]: (state, {payload})=>{
        return{...state, loading: true}
    },
    [postItem.fulfilled]: (state,{payload})=>{  
        let data = null;
        
        // 기존에 저장되있던 데이터는 state로 들어옴
        // state.data에 들어있는 데이터가 배열이 맞다면,
        // 상태값이 들어있는 데이터를 미리 준비한 빈 배열에 복사
        if (Array.isArray(state.data)) {
            data =[...state.data];
            data.push(payload.data);
            //만약에 목록이 최신글이 위로 올라오는거라고 하면, push가 아니라 unshift가 되어야한다.
            //게시판은 unshift를 사용, 댓글은 push를 사용함
        }else{
            //가져온게 없다면 그냥 payload.data를 가져온다 
            data=payload.data;
        }
        return{
            data: data,
            loading: false,
            error: null
        }
    },
    [postItem.rejected]: (state,{payload})=>{
        return{
            ...state,
            loading:false,
            error: {
                code: payload?.status ? payload.status : 500,
                message: payload?.statusText ? payload.statusText : 'Server Error' 
            }
        }
    },
    /** 데이터 수정을 위한 액션 함수 */
    [putItem.pending]: (state, { payload})=>{
        return{...state, loading: true}
    },
    [putItem.fulfilled]: (state,{meta,payload})=>{
        let data = null;

        if (Array.isArray(state.data)) {
            data =[...state.data];
             //findIndex는 배열의 원소들을 콜백함수 파라미터로 하나씩 던저준다.
             const index = data.findIndex(element => element.id === meta.arg.id);

             if(index !== undefined){
                 data.splice(index, 1, payload.data);
             }
         
        }else{
            //가져온게 없다면 그냥 payload.data를 가져온다 
            data= payload.data;
            
        }
        return{
            data: data,
            loading: false,
            error: null
        }
    },
    [putItem.rejected]: (state,{payload})=>{
        return{
            ...state,
            loading:false,
            error: {
                code: payload?.status ? payload.status : 500,
                message: payload?.statusText ? payload.statusText : 'Server Error' 
            }
        }
    },

    /** 데이터 삭제를 조회를 위한 액션 함수 */
    [deleteItem.pending]: (state, {payload})=>{
        return{...state, loading: true}
    },
    [deleteItem.fulfilled]: (state,{meta,payload})=>{
        let data = null;

        if (Array.isArray(state.data)) {
            data=[...state.data];
            //element.id는 숫자형 meta.arg.id는 문자열이기 때문에 무조건 parseInt()로 감싸주기
             const index = data.findIndex(element=>element.id === parseInt(meta.arg.id))
             if(index !== undefined){
                //state.data.splice(index, 1, foo)이면 foo로 교체가 되고,
                // 없으면 거기를 없애라 가 됨.
                 data.splice(index, 1);
             }
        }
        return{
            ...state,
            loading: false,
            error: null
        }
    },
    [deleteItem.rejected]: (state,{payload})=>{
        return{
            ...state,
            loading:false,
            error: {
                code: payload?.status ? payload.status : 500,
                message: payload?.statusText ? payload.statusText : 'Server Error' 
            }
        }
    }

  },
});

export default DepartmentSlice.reducer;
