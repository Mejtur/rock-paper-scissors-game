import {configureStore} from '@reduxjs/toolkit';
import gameStart from './features/gameStart';

export default configureStore({
    reducer: {
        game:gameReducer,
    }
})