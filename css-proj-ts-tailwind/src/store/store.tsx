import { configureStore } from "@reduxjs/toolkit";
import appReducer from './features/StartAppSlice';
import cssReducer from './features/ImportCssSlice';
import cssStyleReducer from './features/CssStyleSlice'

const store = configureStore({
    reducer: {
        appStart : appReducer,
        cssImp : cssReducer,
        styleImp : cssStyleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;