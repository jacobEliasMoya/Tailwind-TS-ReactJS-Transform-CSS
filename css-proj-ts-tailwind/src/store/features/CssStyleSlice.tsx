import { createSlice, current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CssObj {
    style:string ,
    styleVal:string,
}

const initialState:Array<CssObj> = [];

export const cssStyleSlice = createSlice({
    name: 'cssStyle',
    initialState,
    reducers:{
        getCssStyle : (state,action:PayloadAction<CssObj>)=>{
            state.splice(0,1,action.payload);
            // console.log(current(state))
        }
    }
}) 

export const {getCssStyle} = cssStyleSlice.actions;
export default cssStyleSlice.reducer;