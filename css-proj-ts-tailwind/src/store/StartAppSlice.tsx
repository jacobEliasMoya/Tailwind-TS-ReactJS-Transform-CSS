import {createSlice} from '@reduxjs/toolkit';

export const appInitializer = createSlice({
    name:'appInitialize',
    initialState : false,
    reducers:{
        beginApp : (state) =>{
            state=true;
        }
    }

})

export const {beginApp} = appInitializer.actions;
export default appInitializer.reducer;