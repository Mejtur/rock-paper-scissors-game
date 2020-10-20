import {configureStore} from '@reduxjs/toolkit';
import gameReducer from '../features/gameStart';

export default configureStore({
    reducer: {
        game: gameReducer,
    }
})