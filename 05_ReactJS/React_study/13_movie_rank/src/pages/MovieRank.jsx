import React,{ memo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getMovieRank} from '../slices/MovieRankSlice';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
//그래프를 표시하기 위한 컴포넌트
import BarChartView from '../components/BarChartView';
//화면이 마운트 되기 전에 동작하게 하는 hook
import useMountedRef from '../hook/useMountedRef'

//날짜 처리를 위한 dayjs
import dayjs from 'dayjs';

//그래프와 표를 배치하기 위한 flex-box
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

// 표와 바를 반반 나타내기 위해 flex-basis: 50%를 줌
  .flex-item{
      flex-basis: 50%;
      box-sizing: border-box;
      padding: 10px;
  }
`;

const MovieRank = memo(() =>{
    //dayjs().add(-1, 'd'). format('YYYY-MM-DD') 데이터가 들어오는지 확인을 위한 console.log
    /* console.log(`{dayjs().add(-1, 'd').format('YYYY-MM-DD')}`) */
    const dispatch = useDispatch();
     // Redux Store로 부터 Ajax관련 상태값 구독
    const {data, loading, error} = useSelector((state) => state.movieRank);
                                            // 하루 전 날짜의 데이터 값을 불러오기 위한 설정 
    const [targetDt, setTargetDt] = useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));

     // 이 컴포넌트가 화면에 마운트 되었는지 확인하기 위한 hook
     const mountedRef = useMountedRef();
     // 그래프에 전달할 데이터
     const [chartData, setChartData]= useState();

    // 페이지가  열린 직후와 날짜값이 변경되는 경우 리덕스 액선함수 디스패시 --> Ajax 호출
    React.useEffect(()=>{
        //targetDt값이 잘 들어오는지 확인을 위한 console.log 실행
        /* console.log('targetDt=${targetDt}') */
                                // 데이터를 보내기 위해선 'YYYY-MM-DD' 에서 -를 제외해야함
        dispatch(getMovieRank({targetDt: targetDt.replaceAll("-","")}));
    }, [dispatch, targetDt]);

    // 드롭다운의 선택이 변경된 경우의 리액트
   const onDateChange = useCallback((e)=>{
    e.preventDefault();
    // 선택값으로 상태값을 갱신한다. --> React.useEffect()에 의해 액션함수가 디스패치 된다.
    setTargetDt(e.target.value);
   }, [setTargetDt]);

     
    //Ajax 연동 결과에서 그래프에 표시할 데이터만 추려내어 chartData 상태값에 반영한다.
    //Ajax는 컴포넌트가 화면에 마운트 됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트된 이후에 수행되어야만 한다.
    React.useEffect(()=>{
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if (mountedRef.current){
            const newData = {
                movieNm: [],
                audiCnt:[]  
            };
            data.boxOfficeResult.dailyBoxOfficeList.forEach((v,i)=>{
                newData.movieNm.push(v.movieNm);
                newData.audiCnt.push(v.audiCnt);
            });
            setChartData(newData);
        }
    },[mountedRef,data]);

    
    return (
      <div>
          <Spinner visible={loading}/>

            <form>
                <input type='date' className='form-control' placeholder='날짜 선택' value={targetDt} onChange={onDateChange} />
            </form>
            
            <hr/>

          {error ? <ErrorView error={error}/>:(
              <Container>
                <div className='flex-item'>
                    <BarChartView chartData={chartData} />
                </div>
            <div className='flex-item'>        
              <Table>
                  <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>관람객 수</th>
                        <th>매출액</th>
                        <th>누적 관람객 수</th>
                        <th>누적 매출액</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.boxOfficeResult.dailyBoxOfficeList.map((v,i)=>{
                        return (
                            <tr key={i}>
                                <td>{v.rank}</td>
                                    <td>{v.movieNm}</td>
                                    <td>{Number(v.audiCnt).toLocaleString()}명</td>
                                    <td>{Number(v.salesAmt).toLocaleString()}원</td>
                                    <td>{Number(v.audiAcc).toLocaleString()}명</td>
                                    <td>{Number(v.salesAcc).toLocaleString()}원</td>
                            </tr>
                        )
                    })}
                </tbody>
              </Table>
              </div>
              </Container>
          )}
      </div>
  );
});

export default MovieRank;