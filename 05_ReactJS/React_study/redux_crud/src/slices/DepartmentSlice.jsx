import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
import {pending, fulfilled, rejected}from '../Util';

const API_URL = "http://192.168.0.35:3001/department/";

/** 다중행 데이터 조회를 위한 비동기 함수 (게시판 목록조회) */
//DepartmentSlice안에 /getList를 만든다는 의미 
export const getList = createAsyncThunk("DepartmentSlice/getList",async(payload,{rejectWithValue})=>{

    let result = null;
    
    
    try{
        result = await axios.get(API_URL,{
        query: payload?.query,
        page: payload?.page,
        rows: payload?.rows
    });
    //에러가 나면 catch가 실행됨
  }catch(err) {
    console.error(err);
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 (게시판 읽기 기능) */

export const getItem = createAsyncThunk("DepartmentSlice/getItem", async(payload,{rejectWithValue})=>{
        let result = null;
        try{
            result = await axios.get(`${API_URL}/${payload.deptno}`);
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
            result = await axios.put(`${API_URL}/${payload.deptno}`,{
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
            result = await axios.delete(`${API_URL}/${payload.deptno}`);
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
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    [getItem.pending]: pending,
    [getItem.fulfilled]: fulfilled,
    [getItem.rejected]: rejected,

    [postItem.pending]: pending,
    [postItem.fulfilled]: fulfilled,
    [postItem.rejected]: rejected,

    [putItem.pending]: pending,
    [putItem.fulfilled]: fulfilled,
    [putItem.rejected]: rejected,

    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: fulfilled,
    [deleteItem.rejected]: rejected,

  },
});

export default DepartmentSlice.reducer;
