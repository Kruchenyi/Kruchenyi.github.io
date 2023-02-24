import React from "react";

export function QuestionBlock({
  stepQuestion,
  quest,
  onClickVariant,
  step,
}) {
  const percentage = Math.round((step / quest.length) * 100);


  
  return (
    <div className="block">
      <div className="block__body">
        <div className="block__progress">
          <div className="progres" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="block__question">{stepQuestion.ques}</div>
        <ul className="block__list" >
          {stepQuestion.answer.map((item, index) => (
            <li
              onClick={() => onClickVariant(index)}
              className="block__answer"
              key={item}
            >
              {item}{""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
