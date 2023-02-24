import React from "react";

export function Finish(props) {
  return (
    <div className="block__finish">
      <div className="block__result">{props.text}</div>
      <a href="/">
        <button className="btn">Попробовать снова</button>
      </a>
    </div>
  );
}
