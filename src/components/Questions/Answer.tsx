import React from "react";
import "./Questions.scss";

function Answer(props: { content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <div>
      <p className="answer">{props.content}</p>
    </div>
  );
}

export default Answer;
