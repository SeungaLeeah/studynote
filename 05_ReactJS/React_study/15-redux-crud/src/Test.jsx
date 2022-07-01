import React,{ memo} from 'react';

//리덕스를 사용하기 위한 기본 코드
import { useSelector, useDispatch } from 'react-redux';
import{getList, getItem, postItem, putItem, deleteItem} from './slices/DepartmentSlice';

const Test = memo(() =>{
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=> state.DepartmentSlice);

   React.useEffect(()=>{
        //dispatch(getList());
        dispatch(getItem({id: 102}));
        //dispatch(postItem({dname:'hello', loc: 'world'}));
        //dispatch(putItem({id:203, dname:'hello', loc: 'world'}));
        //dispatch(putItem({id:203}));
    },[dispatch])
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