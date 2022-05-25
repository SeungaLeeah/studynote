/** URL 1개당 Slice 1개이다. =>CRUD */
import { createSlice } from '@reduxjs/toolkit'

/** Slice 정의 (Action함수 + Reducer의 개념) */
const counterSlice = createSlice ({
    name:'counter',
    //이 모듈이 관리하고자 하는 상태값들을 명시 => 내가 관리하고 싶은 상태값
    initialState: {
        number: 0,
        color: '#000'
    },
    // 내부 action 및 동기 action = > 상태값을 수정할 때 사용할 함수들을 Reducer로 정의 후, initialState를 정의한다.
    // 상태값을 갱신하기 위한 함수들 구현
    // 컴포넌트에서 이 함수를 호출할 때, 전달되는 파라미터는 action.payload로 전달된다.
    // initialState와 동일한 구조의 JSON을 리턴한다.
    reducers: {
        plus: (state, action) =>{
            /* state에는 기존에 저장 되어있는 상태값 initialState가 들어오고, 
            외부 이벤트 발생으로 부터 전달받은 값을 action에서 action.payload라는 하위 값으로 보내준다. */
            const numberValue = state.number + action.payload;
            /* action.payload를 통해서 기존에 저장되어 있던 상태값(state)에 변화를 준다.  */
            let colorValue ='#000';

            if(numberValue>0){
                colorValue= '#2f77eb';
            }else if(numberValue<0){
                colorValue ='#f60';
            }

            return{number: numberValue, color: colorValue};
            /* 변화를 준 값이 여기로 전달되어, 다시 기존의 저장된 상태값(initialState)으로 전달된다.
               또한, JSON 구조를 만들어서 리턴 해야하며, JSON구조는 상태값 구조와 동일 해야한다. */
        },
        minus:(state, action) =>{
            const numberValue = state.number - action.payload;
            let colorValue ='#000';

            if(numberValue>0){
                colorValue='#2f77eb';
            }else if(numberValue<0){
                colorValue='#f60';
            }
            return {number:numberValue, color:colorValue};
        }
    },
    // 외부 action 및 비동기 action(Ajax용)
    extraReducers:{
        //..여기서는 사용 안함
    }
});

// 외부에서 사용할 수 있는 action함수들 내보내기
export const {plus, minus} = counterSlice.actions;

// 리듀서 객체 내보내기 => reducers이 아닌 reducer임으로 주의해야함.
export default counterSlice.reducer;