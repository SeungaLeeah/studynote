import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./slice/NewsSlice";

const store = configureStore({
    reducer:{
        news : NewsSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    devTools: true
});

export default store;