import {createSlice} from '@reduxjs/toolkit';

export const gameScore = createSlice({
    name:"score",
    initialState: 0,
    reducers:{
        increment: state => state + 1,
        decrement: state => state - 1,
    }
});

export const {increment,decrement} = gameScore.actions;
export const selectScore = state => state.score;

export default gameScore.reducer;