import { configureStore} from '@reduxjs/toolkit';

import KakaoSlice from './slices/KakaoSlice';

const Store = configureStore({
    reducer: {
        kakao:KakaoSlice
    },
    middelware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false}),
    devTools:true

});

export default Store;