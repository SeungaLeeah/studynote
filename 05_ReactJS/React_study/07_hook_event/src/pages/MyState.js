import React from 'react';

const MyState = () => {
  /** 
   * state(상태)값 정의
   * - 이 페이지 안에서 유효한 전역변수 같은 개념.
   * - const  [변수이름, 변수에 대한 setter함수] = React.useState(변수의 기본 값);
   * - state값(상태값)은 직접 변경할 수 없고 반드시 setter를 통해서만 변경이 가능하다.
   * - useState() 함수에 전달하는 값은 state값에 대한 초기값이다. 
  */
  const [myName, setMyName] = React.useState('');   // => const myName =''; 과 동일하다.
  const [myPoint, setMyPoint] = React.useState(50); // => const myPoint= 50; 과 값이 동일하다.
  
  /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다.*/
  const onMyNameChange = e => {
    // e.currentTarget은 jQuery의 $(this)에 해당함.
    // 즉, 이벤트가 발생한 자신(여기서는 input 태그)
    setMyName(e.currentTarget.value); 
    // 이 처리로 sett함수가 호출이 되서 myName 변수값을 변경시켜줌.
  };

  return (
    <div>
      <h2>MyState</h2>  

      {/* state값을 출력할 때는 단순히 변수값으로서 사용한다. */}
      <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>
      {/* 처음 출력되는 값은 초기값으로 출력이 됨으로
      ' '(빈 문자열)님의 점수는 50점 입니다. 로 출력됨 */}

      <hr/>

      <div>
        <lable htmlFor='myNameInput'>이름: </lable>
        <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange}/>
        {/* value={myName}을 적용, onChange 이벤트에는 onMyNameChange 함수를 적용함.
         입력 값이 바뀌면 함수가 호출됨. input 태그가 변경되는 동안 setMyName에 
         계속 입력 값을 보낸다. 그래서 변수 값을 바꾼다.  */}

         {/* 상태 값의 특징 => 상태 값이 setter를 통해 바뀌면 화면이 자동 갱신됨
         -> JS는 출력코드가 필요하지만 React는 상태 값을 변경하면 일시에 다 바뀜 */}
      </div>

      <div>
        <lable htmlFor='myPointInput'>점수: </lable>
        <input
          id='myPointInput'
          type='range'
          min='0'
          max='100'
          value={myPoint}
          step='1'
          // 이벤트 핸들러를 익명 화살표 함수 형식으로 정의한 경우
          onChange={e =>{
            // 자기 스스로의 입력값을 myName이라는 state값에 반영함(익명함수 스타일)
            setMyPoint(e.currentTarget.value);
          }}
          />
      </div>
    </div>
  );
};

export default MyState;