
import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({

    name: 'question',
    initialState: {
        initialState:{
            score:0,
            correctAnswers: 0,
            wrongAnswers:[],
        },
        currentIndex:0,
        currentQuestion: null,
        totalDegree : 0,
        questions : []
    },
    reducers:{

        getQuestions(state, action){
            state.questions = action.payload;
        }
        ,
        getTotalDegree(state , action){
            state.totalDegree = action.payload;

        },

        setCurrentQuestion(state , action){
            state.currentQuestion = state.questions[action.payload];
            state.currentIndex  =  action.payload;


        },
        setWrongAnswer(state, action){
            state.initialState.wrongAnswers.push(action.payload);
        },
        setCorrectAnswer(state){
            state.initialState.correctAnswers = state.initialState.correctAnswers + 1;
        },
        setScore(state, action){
            state.initialState.score = state.initialState.score + action.payload
        },

        resetState(state, action){
            state.initialState.score = 0;
            state.initialState.correctAnswers = 0;
            state.initialState.wrongAnswers =[];
            state.currentQuestion=null;
            state.currentIndex = 0;
            state.totalDegree =0;
            state.questions =[];


        },


    }

});


const questionReducer = questionSlice.reducer;
const questionActions = questionSlice.actions;


export {questionActions , questionReducer};