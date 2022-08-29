import React, { useState } from "react";
import "./Questions.scss";

function AnswerInput(props: { onAdd: (arg0: string) => void; }) {
  const [answer, setAnswer] = useState("");

  function handleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setAnswer(event.target.value);
  }

  function submitAnser(event: { preventDefault: () => void; }) {
    props.onAdd(answer);
    setAnswer("");
    event.preventDefault();
  }
  return (
    <div style={{ display: "flex" }}>
      <input name="answer" placeholder="Answer" className="answerInput" />
      <button type="button" className="answerButton">
        Post
      </button>
    </div>
  );
}

export default AnswerInput;
