import {configureStore} from '@reduxjs/toolkit';
import computerReducer from '../features/computerChoice';
import playerReducer from '../features/playerChoice';
import scoreReducer from '../features/gameScore';

export default configureStore({
    reducer: {
        computer: computerReducer,
        player: playerReducer,
        score: scoreReducer,
    }
})