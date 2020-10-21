import {createSlice} from '@reduxjs/toolkit';

export const gameScore = createSlice({
    name:"score",
    initialState: {
        score:0,
    },
    reducers:{
        increment: state => state.score + 1,
        decrement: state => state.score - 1,
    }
});

export const {increment,decrement} = gameScore.actions;
export const selectScore = state => state.score.score;

export default gameScore.reducer;