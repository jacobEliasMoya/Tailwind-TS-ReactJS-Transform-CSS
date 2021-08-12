import { configureStore } from "@reduxjs/toolkit";
import appReducer from './features/StartAppSlice';
import cssReducer from './features/ImportCssSlice';

const store = configureStore({
    reducer: {
        appStart : appReducer,
        cssImp : cssReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;