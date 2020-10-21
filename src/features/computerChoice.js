import {createSlice} from '@reduxjs/toolkit';

export const computerChoice = createSlice({
    name:'computer',
    initialState:{
        computerChoice:null,
    },
    reducers:{
        setComputer:(state,action)=>{
            state.computerChoice=action.payload.computerChoice;
        },
    },
});

export const {setComputer} = computerChoice.actions;
export const selectComputerChoice = state => state.computer.computerChoice;

export default computerChoice.reducer;