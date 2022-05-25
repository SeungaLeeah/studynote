/* Redux를 만들 때, 가장 중요한건 store를 만드는 것이다. */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from "redux-logger";
import counterSlice from './slices/CounterSlice'
import departmentSlice from "./slices/DepartmentSlice";

const logger = createLogger();
const store = configureStore({
    reducer: {
       //counterSlice 작성 후 진행
      // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
      // 별칭을 counter(key), 객체 이름을 counterSlice(값)으로 잡아줘야한다.  
      // slice가 늘어날 때마다 (,)로 붙여주기
      counter: counterSlice,
      department: departmentSlice
    },
    // 미들웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk사용시 필수)
    middleware:[...getDefaultMiddleware({serializableCheck: false}),logger],
    // redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
});

export default store;