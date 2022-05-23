/* Redux를 만들 때, 가장 중요한건 store를 만드는 것이다. */
import { configureStore } from "@reduxjs/toolkit"
import counterSlice from './slices/CounterSlice'

const store = configureStore({
    reducer: {
       //counterSlice 작성 후 진행
      // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
      // 별칭을 counter(key), 객체 이름을 counterSlice(값)으로 잡아줘야한다.  
      // slice가 늘어날 때마다 (,)로 붙여주기
      counter: counterSlice
    }
});

export default store;