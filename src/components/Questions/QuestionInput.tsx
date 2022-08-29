import React, { useState } from "react";
import "./Questions.scss";

function QuestionInput(props: { onAdd: (arg0: { title: string; content: string; }) => void; }) {
  const [question, setQuestion] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: { target: { name: any; value: any; }; }) {
    const { name, value } = event.target;

    setQuestion((prevQuestion) => {
      return {
        ...prevQuestion,
        [name]: value,
      };
    });
  }

  function submitQuestion(event: { preventDefault: () => void; }) {
    props.onAdd(question);
    setQuestion({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <div>
        <form className="formQuestionInput">
          <input
            name="title"
            onChange={handleChange}
            value={question.title}
            placeholder="Titel"
            className="questionTitle"
          />
          <textarea
            placeholder="Question"
            name="content"
            onChange={handleChange}
            value={question.content}
            className="questionContent"
            rows={2}
          />

          <button
            type="button"
            onClick={submitQuestion}
            className="questionPostButton"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionInput;
