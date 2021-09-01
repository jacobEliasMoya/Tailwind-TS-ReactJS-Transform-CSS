import {createSlice} from '@reduxjs/toolkit';

export const navInitializer = createSlice({
    name:'navInitialize',
    initialState : {
        navOn : false
    },
    reducers:{
        triggerNav : (state) =>{
            state.navOn = !state.navOn
        }
    }
})

export const {triggerNav} = navInitializer.actions;
export default navInitializer.reducer;