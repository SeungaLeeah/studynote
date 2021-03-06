import React,{ memo,useEffect} from 'react';

//리덕스를 사용하기 위한 기본 코드
import { useSelector, useDispatch } from 'react-redux';
import {getList} from './slices/DepartmentSlice';

const Test = memo(() =>{
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=> state.DepartmentSlice);

    useEffect(()=>{
         dispatch(getList({query:'공학', page: 2, rows: 5}));
        //dispatch(getItem({deptno: 221}));
        //dispatch(postItem({dname:'React.js', loc: '1403호'}));
        //dispatch(putItem({deptno:268, dname:'React.js수정', loc: '1406호'}));
        //dispatch(deleteItem({deptno:268}));
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