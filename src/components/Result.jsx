import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalDegree, resetState } from "../Redux/apiCalls/questionApiCalls";
import { useNavigate } from "react-router-dom";
import "./Question.css";
const Result = () => {
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);

  const { totalDegree, initialState } = useSelector((state) => state.question);

  const dispacth = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispacth(getTotalDegree());
  });

  const tryAgain = () => {
    dispacth(resetState());
    navigate("/", { replace: true });
  };

  const toggleWrongAnswer = ()=>{
    if(initialState.wrongAnswers.length === 0){
      setShowWrongAnswers(false)
    }
    else{
      setShowWrongAnswers((prev) => !prev)

    }
  }
  return (
    <>
      <div className="flex flex-col justify-around  items-center bg-bg w-[500px] min-w-[500px] min-h-[50vh] max-h-max rounded-[4px] m-auto py-[30px] px-[60px]">
        <h2 className="text-2xl">Result</h2>
        <div className="score flex flex-row justify-between">
          <span className="mr-4 text-base">Total Score : </span>
          <span>
            {" "}
            <span className="text-base">{initialState.score} out of</span>{" "}
            {totalDegree}
          </span>
        </div>

        <div className="correct flex flex-row justify-between">
          <span className="mr-4 text-base">Correct answers : </span>
          <span className="text-base"> {initialState.correctAnswers} </span>
        </div>

        <div
          className="wrong flex flex-row justify-between"
          onClick={() => toggleWrongAnswer()}
        >
          <span className="mr-4 text-base flex flex-row justify-between items-center cursor-pointer">
            { initialState.wrongAnswers.length > 0? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-caret-down-fill mr-1 "
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg> : ''}
            wrong answers :{" "}
          </span>
          <span className="text-base">
            {" "}
            {initialState.wrongAnswers.length}{" "}
          </span>
        </div>
        <div
          className={
            !showWrongAnswers
              ? "hidden  pointer-events-none"
              : "transition-all duration-300 ease-in-out  flex flex-col pointer-events-auto w-ful"
          }
        >
          {initialState.wrongAnswers?.map((answer, index) => {
            return (
              <li
                key={index}
                className=" border-b-[1px] flex flex-col justify-between items-start my-2 py-2"
              >
                <span>
                  Question: <strong>{answer.question} </strong>
                </span>
                <span>
                  Wrong answer: <strong>{answer.wrong} </strong>
                </span>
                <span>
                  Correct Answer: <strong>{answer.correct} </strong>
                </span>
              </li>
            );
          })}
        </div>

        <button onClick={() => tryAgain()}>Try Again</button>
      </div>
    </>
  );
};

export default Result;
