import { useEffect } from "react";
import {
  getQuestions,
  setCurrentQuestion,
} from "../Redux/apiCalls/questionApiCalls";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import QuestionItem from "./QuestionItem";

const Question = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestion, currentIndex } = useSelector(
    (state) => state.question
  );

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  useEffect(() => {
    dispatch(setCurrentQuestion(currentIndex));
  }, [currentIndex]);

  return (
    <div className=" w-full h-full flex flex-row justify-center items-center ">

<QuestionItem
        index={currentIndex}
        question={currentQuestion}
        questions={questions}
      ></QuestionItem>

    </div>
  );
};

export default Question;
