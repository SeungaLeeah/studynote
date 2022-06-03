import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

export const getCovid19 = createAsyncThunk("covid19/getCovid19", async(payload,{rejectWithValue})=>{
  let result = null;

  try{
    result = await axios.get('http://localhost:3001/covid19');
  }catch(err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const Covid19Slice = createSlice({
  name: 'covid19',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: {
    [getCovid19.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [getCovid19.fulfilled]: (state,{payload})=>{
      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getCovid19.rejected]: (state,{payload})=>{
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

export default Covid19Slice.reducer;
