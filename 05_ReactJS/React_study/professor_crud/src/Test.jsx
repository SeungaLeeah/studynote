import React,{ memo,useEffect} from 'react';

//리덕스를 사용하기 위한 기본 코드
import { useSelector, useDispatch } from 'react-redux';
import {getLis,getItem,postItem,putItem,deleteItem} from './slices/ProfessorSlice';

const Test = memo(() =>{
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=> state.ProfessorSlice);

    useEffect(()=>{
         //dispatch(getList({query:'공학', page: 2, rows: 5}));
        dispatch(getItem({profno: 9908}));
        //dispatch(postItem({name:'이승아', userid: 'leeah', position:'부교수', sal:400, hiredate:"2021-05-06 00:00:00", comm:20, deptno:102}));
        //dispatch(putItem({profno:9908, name:'이승아', userid: 'leeah', position:'조교수', sal:500, hiredate:"2021-05-06 00:00:00", comm:40, deptno:102}));
        //dispatch(deleteItem({profno:268}));
    },[dispatch]);
    
    return (
        loading ? "loading...":(
            error ? JSON.stringify(error) : (
            <>
                {JSON.stringify(data)}
            </>
            )
        )
  );
});

export default Test;