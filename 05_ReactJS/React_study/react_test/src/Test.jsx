import React,{ memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid19 } from './slices/Covid19Slice';

const Test = memo(() =>{
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.covid19);

    React.useEffect(()=>{
        dispatch(getCovid19({
           gte: "2020-02-17T00:00:00Z",
            lte: "2020-02-27T00:00:00Z"

        }))
    },[dispatch]);

    return (
    loading ? "loading..." : (
        error ? JSON.stringify(error) : (
            <>
            <h1>Covid</h1>
            {JSON.stringify(data)}
            </>
        )
    )
  );
});

export default Test;