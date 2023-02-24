import { QuestionBlock } from "./components/QuestionBlock";
import { useState } from "react";
import { Finish } from "./components/Finish";
import { FirstPage } from "./components/FirtsPage";

function App() {
  let s = "";

  const BMW = [
    {
      id: 1,
      ques: "Год основания компании BMW",
      answer: ["1916", "1926", "1936", "1946"],
      match: 0,
    },
    {
      id: 2,
      ques: "Название первого автомобиля BMW?",
      answer: ["Isetta", "Nazca", "Dixi", "Glas 3000"],
      match: 2,
    },
    {
      id: 3,
      ques: "Что еще, кроме автомобилей, выпускала компания BMW?",
      answer: [
        "Двигатели для самолетов",
        "Велосипеды и мотоциклы",
        "Тормоза для поездов",
        "Все перечисленное",
      ],
      match: 3,
    },
    {
      id: 4,
      ques: "Первую модель BMW, которую серийно оснащали подушкой безопасности.",
      answer: ["Третья серия", "Пятая серия", "Седьмая серия", "Восьмая серия"],
      match: 2,
    },
    {
      id: 5,
      ques: "Как расшифровывается аббревиатура BMW?",
      answer: [
        "Больше, мощнее, выше",
        "Баварские мощные автомобили",
        "Баварские моторные заводы",
      ],
      match: 2,
    },
  ];

  const Mersedes = [
    {
      id: 1,
      ques: "Год основания Mercedes-Benz",
      answer: ["1926", "1936", "1946", "1916"],
      match: 0,
    },
    {
      id: 2,
      ques: "Что значит знак Mercedes?",
      answer: [
        "Символ руля",
        "Три стихии",
        "Просто геометрическая фигура",
        "Мир во всём мире",
      ],
      match: 1,
    },
    {
      id: 3,
      ques: "Как расшифровывается аббревиатура SL?",
      answer: [
        "Стремительно летящий",
        "Спортивный легкий",
        "Супер люкс",
        "Никак не расшифровывается",
      ],
      match: 1,
    },
    {
      id: 4,
      ques: "Какая система безопасности была впервые реализована на Mercedes-Benz W116?",
      answer: [
        "Антиблокировочная система (ABS)",
        "Запрограммированные зоны деформации в кузове",
        "Травмобезопасное оснащение салона",
        "Всё перечисленное было реализовано в этом автомобиле",
      ],
      match: 3,
    },
    {
      id: 5,
      ques: "Какое название носит инновационная технология, направленная на уменьшение энергоёмкости?",
      answer: ["New Eco", "Green Word", "Blueefficiency", "Min Energy"],
      match: 2,
    },
  ];

  const Audi = [
    {
      id: 1,
      ques: "Год оснвания Audi?",
      answer: ["1909", "1919", "1929", "1939"],
      match: 0,
    },
    {
      id: 2,
      ques: "В какой из указанных стран не собирали автомобили Audi?",
      answer: ["Польша", "Италия", "Венгрия", "Словакия"],
      match: 1,
    },
    {
      id: 3,
      ques: "Как переводится название марки Audi?",
      answer: ["Вижу", "Читаю", "Слушаю", "Пою"],
      match: 2,
    },
    {
      id: 4,
      ques: "В каком из этих немецких городов сейчас находится штаб-квартира компании Audi?",
      answer: ["Эмден", "Ганновер", "Ингольштадт", "Вольфсбург"],
      match: 2,
    },
    {
      id: 5,
      ques: "Автомобили с каким типом кузова не выпускала компания Audi?",
      answer: ["Хэтчбек", "Микроавтобус", "Купе", "Кабриолет"],
      match: 1,
    },
    {
      id: 6,
      ques: "Какая модель Audi впервые получила алюминиевый кузов?",
      answer: ["А2", "А4", "А6", "А8"],
      match: 3,
    },
  ];
  const startGame = (e) => {
    s = e.target.textContent;
    if (s) {
      setStart((start += s));
    }
  };
  let [start, setStart] = useState("");
  let quest;
  if (start === "BMW") quest = BMW;
  else if (start === "Mersedes") quest = Mersedes;
  else quest = Audi;

  const [step, setstep] = useState(0);
  let stepQuestion = quest[step];
  const [count, setcount] = useState(0);
  const onClickVariant = (index) => {
    if (index === quest[step].match) {
      setcount(count + 1);
    }
    setstep(step + 1);
  };

  let part = "";
  if (!start) {
    part = <FirstPage startGame={startGame} title={'Опросник на автомобильную тему'}/>;
  } else if (step === quest.length) {
    part = (
      <Finish text={`Правильно ответили на : ${count} из ${quest.length}`} />
    );
  } else {
    part = (
      <QuestionBlock
        quest={quest}
        onClickVariant={onClickVariant}
        stepQuestion={stepQuestion}
        step={step}
      />
    );
  }

  return <div className="container">{part}</div>;
}

export default App;
