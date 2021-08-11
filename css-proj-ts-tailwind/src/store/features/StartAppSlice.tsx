import {createSlice} from '@reduxjs/toolkit';

export const appInitializer = createSlice({
    name:'appInitialize',
    initialState : {
        appOn : false
    },
    reducers:{
        beginApp : (state) =>{
            state.appOn = !state.appOn
        }
    }
})

export const {beginApp} = appInitializer.actions;
export default appInitializer.reducer;