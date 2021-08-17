import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState:Array<string> = [];

export const cssStyleSlice = createSlice({
    name: 'cssStyle',
    initialState,
    reducers:{
        getCssStyle : (state,action:PayloadAction<string>)=>{
            return state.filter(item=>item !== action.payload);
        }
    }
}) 

export const {getCssStyle} = cssStyleSlice.actions;
export default cssStyleSlice.reducer;