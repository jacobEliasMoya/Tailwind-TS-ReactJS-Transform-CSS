import { createSlice,current,PayloadAction } from "@reduxjs/toolkit";

export interface CssJsonInt {
    id: any,
    name:string,
    properties:string[]
}

const initialState:Array<CssJsonInt> = [];

export const obtainCssProperties = createSlice({
    name:'cssFetch',
    initialState,
    reducers:{
        importData:(state, action:PayloadAction<CssJsonInt>):void =>{
            state.push(action.payload);
        }
    }
})

export const {importData} = obtainCssProperties.actions;
export default obtainCssProperties.reducer;