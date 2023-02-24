import React from "react";

export function FirstPage({ startGame, title }) {
  const auto = ["BMW", "Mersedes", "Audi"];

  return (
    <div className="first">
      <h1 className="first__title">{title}</h1>
      <h2 className="first__sup">Выберите марку</h2>
      <div className="first__b" onClick={(e) => startGame(e)}>
       {auto.map(item => <button  className="first__btn" key={item}>{item}</button>)}
      </div>
    </div>
  );
}
