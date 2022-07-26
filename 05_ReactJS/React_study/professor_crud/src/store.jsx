import { configureStore} from "@reduxjs/toolkit";
import ProfessorSlice from "./slices/ProfessorSlice";

const store = configureStore({
    reducer:{
        ProfessorSlice:ProfessorSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    devTools: true
});

export default store;