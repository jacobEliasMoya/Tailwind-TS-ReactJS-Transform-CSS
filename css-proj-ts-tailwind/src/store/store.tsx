import { configureStore } from "@reduxjs/toolkit";
import appReducer from './features/StartAppSlice';

const store = configureStore({
    reducer: {
        appStart : appReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;