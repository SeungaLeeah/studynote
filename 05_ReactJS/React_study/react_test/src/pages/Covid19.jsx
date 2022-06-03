import React,{ memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid19 } from '../slices/Covid19Slice';

import { useQueryString} from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import LineChartView from '../components/LineChartView';
import MenuLink from '../components/MenuLink';




const Covid19 = memo(() =>{
  const {data, loading, error} = useSelector((state) => state.covid19);
    const dispatch = useDispatch();
    const {date_gte, date_lte} = useQueryString();

    const mountedRef = React.useRef(false);

    React.useEffect(()=>{
        setTimeout (()=>{
            mountedRef.current = true;
        });
    }, []);


    React.useEffect(()=>{
    dispatch(getCovid19({date_gte, date_lte}));
    },[dispatch,date_gte, date_lte]);


    return (
      <div>
        <nav>
            <MenuLink to={`/covid19/confirmed?date_gte=${date_gte}&date_lte=${date_lte} `}>일일확진자</MenuLink>
            <MenuLink to={`/covid19/confirmed_acc?date_gte=${date_gte}&date_lte=${date_lte} `}>누적확진자</MenuLink>
            <MenuLink to={`/covid19/active?date_gte=${date_gte}&date_lte=${date_lte} `}>격리환자</MenuLink>
            <MenuLink to={`/covid19/released?date_gte=${date_gte}&date_lte=${date_lte} `}>격리해제</MenuLink>
            <MenuLink to={`/covid19/released_acc?date_gte=${date_gte}&date_lte=${date_lte} `}>누적격리해제</MenuLink>
            <MenuLink to={`/covid19/death?date_gte=${date_gte}&date_lte=${date_lte} `}>사망자</MenuLink>
            <MenuLink to={`/covid19/death_acc?date_gte=${date_gte}&date_lte=${date_lte} `}>누적사망자</MenuLink>
        </nav>
      <Spinner visible={loading}/>

        {error ? (
            <ErrorView error={error}/>
        ): (
          data && (
            <Routes>
              <Route path='/:dataItem' element={<LineChartView chartData={data}/>}/>
            </Routes>
          )       
      )}
      </div>
  );
});

export default Covid19;