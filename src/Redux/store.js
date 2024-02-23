import {configureStore} from '@reduxjs/toolkit';
import { questionReducer } from './slices/questionSlice';


const store = configureStore({
    reducer : {
    question: questionReducer
    }
});

export default store;