import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

export const getBoard = createAsyncThunk("BoardSlice/getBoard", async(payload,{rejectWithValue})=>{
  let result = null;

  try{
    result = await axios.get('');
  }catch(err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const BoardSlice = createSlice({
  name: 'board',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: {
    [getBoard.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [getBoard.fulfilled]: (state,{payload})=>{
      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getBoard.rejected]: (state,{payload})=>{
      return{
        data: payload?.date,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    }
  },
});

export default BoardSlice.reducer;
