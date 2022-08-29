import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavbarComponent/Navbar";
import Question from "./Question";
import QuestionInput from "./QuestionInput";

function QuestionsPage() {
const [questions, setQuestions] = useState<Array<Object>>([]); 


  function addQuestion(newQuestion: any) {
    setQuestions((prevQuestions: Array<Object>) => {
      return [...prevQuestions, newQuestion]
    })
  }

  function deleteQuestion(id: number) {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter((questionItem, index) => {
        return index !== id;
      });
    });
  }

  const loggedInUser = useSelector((state:any) => state.loggedInUser);
  const isLoggedIn = useSelector((state:any) => state.isLoggedIn);

  console.log(loggedInUser);

  const logedin = true;
  return (
    <div>
      <NavBar />
      {isLoggedIn ? <QuestionInput onAdd={addQuestion} /> : null}
      {questions.map((questionItem, index) => {
        return (
          <div className="divCenter">
            <Question
              key={index}
              id={index}
              title={(questionItem as {[key: string]: any})['title'] }
              content={(questionItem as {[key: string]: any})['content']}
              onDelete={deleteQuestion}
            />
          </div>
        );
      })}
    
      
    </div>
  );
}

export default QuestionsPage;
