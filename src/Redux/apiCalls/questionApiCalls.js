import { questionActions } from "../slices/questionSlice";
import dummyData from "../../data[30].json";

export function getQuestions() {
  return async (dispatch) => {
    try {
      const questions = dummyData.questions;
      dispatch(questionActions.getQuestions(questions));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTotalDegree() {
  return async (dispatch) => {
    try {
      const totalDegree = dummyData["Tot degree"];
      dispatch(questionActions.getTotalDegree(totalDegree));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setCorrectAnswer() {
  return async (dispatch) => {
    try {
      dispatch(questionActions.setCorrectAnswer());
    } catch (error) {
      console.log(error);
    }
  };
}

export function setWongAnswer(answer) {
  return async (dispatch) => {
    try {
      dispatch(questionActions.setWrongAnswer(answer));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setScore(score) {
  return async (dispatch) => {
    try {
      dispatch(questionActions.setScore(score));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setCurrentQuestion(index) {
  return async (dispatch) => {
    try {
      dispatch(questionActions.setCurrentQuestion(index));
    } catch (error) {
      console.log(error);
    }
  };
}


export function resetState() {
  return async (dispatch) => {
    try {
      dispatch(questionActions.resetState());
    } catch (error) {
      console.log(error);
    }
  };
}