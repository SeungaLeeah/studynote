import React,{memo} from 'react'
import Spinner from '../components/Spinner';
import Table from '../components/Table';

//상태값을 로드하기 위한 hook과 action 함수를 dispatch할 hook참조
import { useSelector, useDispatch } from 'react-redux';
//Slice에 정의된 액션함수들 참조
import{getList} from '../slices/DepartmentSlice';

const Department = memo(() => {
  //컴포넌트가 마운트 될 때 콘솔의 모든 내용 삭제함(출력 결과가 복잡해지는 것을 방지)
  React.useEffect(()=> console.clear(),[]);

  //hook을 통해 slice가 관리하는 상태값 가져오기
  const {data, loading, error} = useSelector((state)=> state.department);

  //dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치함
  React.useEffect(()=>{
        dispatch(getList());
  },[dispatch]);

  return (
    <div>
      <Spinner visible={loading}/>
      {error?(
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr/>
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>dname</th>
              <th>loc</th>
            </tr>
          </thead>
          <body>
            {data && data.map((v,i)=>(
              <tr key={i}>
                <th>{v.id}</th>
                <th>{v.dname}</th>
                <th>{v.loc}</th>
                </tr>
            ))}
          </body>
        </Table>
      )}
    </div>
  )
});

export default Department;