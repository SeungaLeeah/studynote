import React,{memo} from 'react'
import styled from 'styled-components';

import { useSelector,useDispatch } from 'react-redux';
import useMountRef from '../hook/useMounterRef'
import Spinner from '../components/Spinner';
import Table from '../components/Table';
import ErrorView from '../components/ErrorView';
import { getMovieRank } from '../slices/MovieRankSlice';
import BarChartView from '../components/BarChartView';

import dayjs from 'dayjs';

//그래프와 표를 배치하기 위한 flex-box
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .flex-item{
      flex-basis: 50%;
      box-sizing: border-box;
      padding: 10px;
  }
`;
const MovieRank = memo (() => {
    const dispatch = useDispatch();
    // Redux Store로 부터 Ajax관련 상태값 구독
    const {data, loading, error} = useSelector((state)=> state.movieRank)
    // 검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
    const [targetDt, setTargetDt] = React.useState(dayjs().add(-1,'d').format('YYYY-MM-DD'));
    
    // 이 컴포넌트가 화면에 마운트 되었는지 확인하기 위한 hook
        const mountRef = useMountRef();
        // 그래프에 전달할 데이터
        const [chartData, setChartData]= React.useState();

    // 페이지가  열린 직후와 날짜값이 변경되는 경우 리덕스 액선함수 디스패시 --> Ajax 호출
    React.useEffect(()=>{
        dispatch(getMovieRank({targetDt: targetDt.replaceAll("-","")}));
    },[dispatch,targetDt]);
    
    // 드롭다운의 선택이 변경된 경우의 리액트
    const onDateChange = React.useCallback((e)=>{
        e.preventDefault();
        // 선택값으로 상태값을 갱신한다. --> React.useEffect()에 의해 액션함수가 디스패치 된다.
        setTargetDt(e.target.value);
    },[]);
    
    //Ajax 연동 결과에서 그래프에 표시할 데이터만 추려내어 chartData 상태값에 반영한다.
    //Ajax는 컴포넌트가 화면에 마운트 됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트된 이후에 수행되어야만 한다.
    React.useEffect(()=>{
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if (mountRef.current){
            const newDate = {
                movieNm: [],
                audiCnt:[]  
            };
            data.boxOfficeResult.dailyBoxOfficeList.forEach((v,i)=>{
                newDate.movieNm.push(v.movieNm);
                newDate.audiCnt.push(v.audiCnt);
            });
            setChartData(newDate);
        }
    },[mountRef,data]);

  return (
    <div>
        <Spinner visible={loading}/> 

        <form>
            <input type='data' className='form-control' placeholder='날짜선택' value={targetDt} onChange={onDateChange}/> 
        </form>

        <hr/>

        {error ? <ErrorView error={error}/> : (
            <Container>
            <div className='flex-item'>
                <BarChartView chartData={chartData}/>
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
                        
                        return(
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