import { createSlice, current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState:Array<string> = [];

export const cssStyleSlice = createSlice({
    name: 'cssStyle',
    initialState,
    reducers:{
        getCssStyle : (state,action:PayloadAction<string>)=>{

            if(state.length<1){
                state.push(action.payload);
            } 
            
            if(state.includes(action.payload)){
            } else {
                state.push(action.payload);
            }

            console.log(current(state));
        }
    }
}) 

export const {getCssStyle} = cssStyleSlice.actions;
export default cssStyleSlice.reducer;