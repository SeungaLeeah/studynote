import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
import {pending, fulfilled, rejected}from '../Util';
import { cloneDeep } from "lodash";

const API_URL = 'http://localhost:3001/department/';

/** 다중행 데이터 조회를 위한 비동기 함수 (게시판 목록조회) */
//DepartmentSlice안에 /getList를 만든다는 의미 
export const getList = createAsyncThunk("DepartmentSlice/getList", async(payload,{rejectWithValue})=>{
    let result = null;
    
    try{
        result = await axios.get(API_URL,{
        params:{
        query: payload?.query,
        page: payload?.page,
        rows: payload?.rows
        }
    });

  }catch(err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 (게시판 읽기 기능) */

export const getItem = createAsyncThunk("DepartmentSlice/getItem", async(payload,{rejectWithValue})=>{
        let result = null;
        try{
            result = await axios.get(`${API_URL}${payload?.deptno}/`);
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});

/** 데이터 저장을 위한 비동기 함수 POST */
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async(payload,{rejectWithValue})=>{
        let result = null;

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
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async(payload,{rejectWithValue})=>{
        let result = null;
        try{
            result = await axios.put(`${API_URL}${payload.deptno}/`,{
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
            result = await axios.delete(`${API_URL}${payload.deptno}/`);
      }catch(err) {
        result = rejectWithValue(err.response);
      }
      return result;
});
const DepartmentSlice = createSlice({
  name: 'DepartmentSlice',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]: fulfilled,
    [getItem.rejected]: rejected,

  
        /** 데이터 저장을 위한 액션 함수 */
        [postItem.pending]: pending,
        [postItem.fulfilled]: (state, { meta, payload }) => {
            // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
            const data = cloneDeep(state.data);
            console.log(data);

            // 새로 저장된 결과를 기존 상태값 배열의 맨 앞에 추가한다.
            data.item.unshift(payload.data.item);

            // 기존의 상태값 배열에서 맨 마지막 항목은 삭제한다.
            data.item.pop();

            return {
                data: data,
                loading: false,
                error: null
            }
        },
    [postItem.rejected]: rejected,

    /** 데이터 수정을 위한 액션함수 */
    [putItem.pending]: pending,
    [putItem.fulfilled]: (state,{meta, payload})=>{
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
      const data = cloneDeep(state.data);
      console.log(data);

      // 기존의 데이터에서 수정이 요청된 항목의 위치를 검색한다.
      const index = data.item.findIndex(element => element.deptno === parseInt(meta.arg.deptno));
      console.log('index=' +index);

      // 검색이 되었다면 해당항목을 삭제한다.
      if (index !== undefined){
        data.item.splice(index,1, payload.data.item);
      }
      console.log(data)
      return{
        data: data,
        loading: false,
        error:null
      }
    },
    [putItem.rejected]: rejected,

    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: (state,{meta, payload})=>{
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
      const data = cloneDeep(state.data);
      console.log(data);

      // 기존의 데이터에서 삭제가 요청된 항목의 위치를 검색한다.
      const index = data.item.findIndex(element => element.deptno === parseInt(meta.arg.deptno));
      console.log('index=' +index);

      // 검색이 되었다면 해당항목을 삭제한다.
      if (index !== undefined){
        data.item.splice(index,1);
      }
      console.log(data)
      return{
        data: data,
        loading: false,
        error:null
      }
    },
    [deleteItem.rejected]: rejected,

  },
});

export default DepartmentSlice.reducer;
