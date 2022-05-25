import React,{memo} from 'react'

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook함조
import{useSelector, useDispatch} from 'react-redux';
// Slice에 정의된 액션함수를 참조 => plus 와 minus가 상태값 갱신하는 함수이다.
import {plus, minus} from '../slices/CounterSlice';

const Counter = memo(() => {
  // 컴포넌트가 마운트 될 때 콘솔의 모든 내용을 삭제함(출력 결과가 복잡해 지는 것을 방지)
  React.useEffect(()=> console.clear(),[]);

  // hook을 통해 slice가 관리하는 상태값 가져오기 => useSelector((state)는 Store파일에 counter: counterSlice이다.
  // 그러므로 counterSlice를 사용하기 위해서는 state.counter로 뽑아줘야 한다.
  /**state={
   * counter: counterSlice 
   * } 와 같은 의미이다.*/
  const {number,color} = useSelector((state)=> state.counter);
  //const {number,color} 에 저장되는 값은 CounterSlice 파일 안에 initialState:{number:0, color:'#000}이다. 

  // dispatch 함수 생성
  const dispatch = useDispatch();

  /* ruturn 안에서 이벤트 발생시, 
  * 1. CounterSlice 파일에 reducers를 호출하고,
  * 2. reducers가 initialState의 값을 갱신 해주고, 갱신한 값을 const {number,color}로 보내준다.  */
  return (
    <div style={{display:'flex'}}>
      <button onClick={(e)=>{dispatch(plus(5));}}>+5</button>
      {/* dispatch는 호출했다는 의미이다. => plus(5)는 CounterSlice파일에 action.payload로 전달된다. */}
      <h2 style={{
        color:color,
        margin: '10px',
        width: '50px',
        textAlign: 'center'
      }}>{number}</h2>
      <button onClick={(e)=>{dispatch(minus(3));}}>-3</button>
    </div>
  );
});

export default Counter;