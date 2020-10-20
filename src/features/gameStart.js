import {createSlice} from '@reduxjs/toolkit';

export const gameStart = createSlice({
    name:'game',
    initialState:{
        playerChoice:null,
        computerChoice:null,
    },
    reducers:{
        setPlayer:(state,action)=>{
            state.playerChoice=action.payload.playerChoice;
        },
        setComputer:(state,action)=>{
            state.computerChoice=action.payload.computerChoice;
        },
    },
});

export const {setPlayer,setComputer} = gameStart.actions;
export const selectPlayerChoice = state => state.game.playerChoice;
export const selectComputerChoice = state => state.game.computerChoice;

export default gameStart.reducer;