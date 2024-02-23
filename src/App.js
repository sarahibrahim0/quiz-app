import "./App.css";
import Question from "./components/Question";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Result from "./components/Result";
import { UseSelector, useSelector } from "react-redux";



function App() {

  const {initialState} =  useSelector(state=> state.question);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path="/" element={<Question/>} />
          <Route path="/result" element={initialState.score === 0  && initialState.correctAnswers === 0 && initialState.wrongAnswers.length === 0 ? <Navigate to='/'></Navigate> : <Result/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
