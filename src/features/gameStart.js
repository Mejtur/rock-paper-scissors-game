import {createSlice} from '@reduxjs/toolkit';

export const gameStart = createSlice({
    name:'game',
    initialState:{
        isStarted : false,
    },
    reducers:{
        setGame: (state,action) => {
            state.isStarted = action.payload.isStarted;
        }
    }
});

export const {setGame} = setGame.actions;
export const selectIsStarted = state => state.game.isStarted;

export default gameStart.reducer;