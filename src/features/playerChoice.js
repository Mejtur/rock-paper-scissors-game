import {createSlice} from '@reduxjs/toolkit';

export const playerChoice = createSlice({
    name:'player',
    initialState:{
        playerName:null,
        playerImage:null,
    },
    reducers:{
        setPlayer:(state,action)=>{
            state.playerName=action.payload.playerName;
            state.playerImage=action.payload.playerImage;
        },
    },
});

export const {setPlayer} = playerChoice.actions;
export const selectPlayerName = state => state.player.playerName;
export const selectPlayerImage = state => state.player.playerImage;

export default playerChoice.reducer;