import { createSlice, current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState:Array<string> = [];

export const cssStyleSlice = createSlice({
    name: 'cssStyle',
    initialState,
    reducers:{
        getCssStyle : (state,action:PayloadAction<string>)=>{
            state.splice(0,1,action.payload);
            console.log(current(state));
        }
    }
}) 

export const {getCssStyle} = cssStyleSlice.actions;
export default cssStyleSlice.reducer;