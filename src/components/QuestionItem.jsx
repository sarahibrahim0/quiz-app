import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import {
  setCorrectAnswer,
  setCurrentQuestion,
  setScore,
  setWongAnswer,
} from "../Redux/apiCalls/questionApiCalls";
import { useEffect, useState } from "react";
import "./Question.css";

const QuestionItem = (props) => {

  const dispatch = useDispatch();
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{

    if(props.index === props.questions.length && props.index !== 0){
        navigate('/result')
    }

  },[props.index])

  const next = () => {



        if (answer) {
            dispatch(setScore(10));
            dispatch(setCorrectAnswer());
          } else {
            dispatch(
              setWongAnswer({
                question: props.questions[props.index]?.question,
                wrong: props.questions[props.index].choices[answerIndex],
                correct:
                  props.questions[props.index].choices[
                    props.questions[props.index].correct_choice - 1
                  ],
              })
            );
          }
      
          if (props.index !== props.questions.length) {
            setCurrentQuestion((prev) => prev + 1);
            dispatch(setCurrentQuestion(props.index + 1));
          } else {
            dispatch(setCurrentQuestion(0));
          }

          setAnswer(null);
          setAnswerIndex(null);
          
        
    

 

  };
  const onAnswer = (choice, index) => {
    // setCurrentQuestion(index)
    setAnswerIndex(index);
    if (index === props.question.correct_choice - 1) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  return (
    <div className="flex flex-col  bg-bg w-[500px] min-w-[30vh] rounded-[4px] my-[100px] py-[30px] px-[60px]">
      <div className="">
        <span className="text-[32px] font-[500] ">
          {props.index + 1}
        </span>

        <span className="text-[16px] font-[500] text-disabled">
          /{props.questions.length}
        </span>
      </div>

      <h2 className="text-[20px] font-[500] m-0">{props.question?.question}</h2>
      <ul className="mt-5 ">
        {props.question?.choices?.map((choice, index) => {
          return (
            <li
              key={index}
              className={
                answerIndex === index
                  ? "selected-answer text-foreground text-base bg-bg border-[1px] border-solid border-disabled rounded-[16px] p-[11px] mt-[15px] cursor-pointer"
                  : " text-foreground text-base bg-bg border-[1px] border-solid border-disabled rounded-[16px] p-[11px] mt-[15px] cursor-pointer"
              }
              onClick={() => onAnswer(choice, index)}
            >
              {choice}
            </li>
          );
        })}
      </ul>

      <div className="footer flex flex-row  justify-end items-start">
        <button onClick={() => next()} disabled={answerIndex === null  }>
          {props.index === props.questions.length - 1 ? 'Finish' : "Next"}
        </button>

      </div>
    </div>
  );
};

export default QuestionItem;
