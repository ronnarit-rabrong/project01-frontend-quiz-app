import "./style.scss";
import { useState } from "react";
import type { QuizzesProps } from "./type"

export default function Quizzes(props: QuizzesProps): React.ReactElement {
  const [isSubmit, setSumbit] = useState(false);
  const [sendAnswer, setSendAnswer] = useState<number | null>(null);
  const [isNotSelect, setErrorSelect] = useState<boolean>(false);
  const {
    theme,
    score,
    setScore,
    setRender,
    currentQuestion,
    setCurrentQuestion,
    question,
    questionOption,
    questionAnswer,
    questionsLength
  } = props.quizzesData;

  const barPosition = ((currentQuestion + 1) * 100) / 10;
  return (<>
    <section className={`quizzes quizzes--${theme}`}>
      <div className="wrapper">
        <div className="question">
           <p className="question__current">Question {currentQuestion + 1} of {questionsLength}</p>
           <h3 className="question__name">{question}</h3>
          <div className="bar">
            <span className="bar__line" style={{width: barPosition+"%"}}></span>
          </div>
        </div>
        <div className="option">
          {questionOption.map((option, index) => (
            <button key={index} className="option__button" id={`option-${index}`} onClick={handleClick} disabled={isSubmit}><span>{option}</span></button>
          ))}

          {isSubmit
            ? <button className="option__submit-buttont" type="button" onClick={handleNextQuestion}>Next Question</button>
            : <button className="option__submit-buttont" type="button" onClick={handleSubmitAnswer}>Submit Answer</button>}

          {isNotSelect
            ? <p className="option__select-error">Please select an answer</p>
            : ""
          }

        </div>
      </div>
    </section>
  </>)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const parentEl = e.currentTarget.parentElement;
    const option = e.currentTarget;
    const options = parentEl?.querySelectorAll(".option__button");

    if (parentEl && option && options) {
      options?.forEach((el) => el.classList.remove("option__button--onClick"));
      option.classList.add("option__button--onClick");
      setSendAnswer(parseInt(option.id.slice(7)));
    }
  }

  function handleSubmitAnswer() {
    if (sendAnswer === null) {
      setErrorSelect(true);
      return;
    }

    if (isSubmit === true) {
      return;
    }

    if (questionOption[sendAnswer] === questionAnswer) {
      const optionAtClick = document.querySelector(`#option-${sendAnswer}`);
      optionAtClick?.classList.remove("option__button--onClick");
      optionAtClick?.classList.add("option__button--correct");
      setScore(score + 1);
    } else {
      const findCorrect = questionOption.findIndex(el => el === questionAnswer);
      const optionAtClick = document.querySelector(`#option-${sendAnswer}`);
      const optionIsCorrect = document.querySelector(`#option-${findCorrect}`);
      optionAtClick?.classList.remove("option__button--onClick");
      optionAtClick?.classList.add("option__button--not-correct");
      optionIsCorrect?.classList.add("option__button--find-correct");
      setScore(score + 0);
    }
    
    setErrorSelect(false);
    setSumbit(true);
  }

  function handleNextQuestion() {
    const options = document.querySelectorAll(".option__button");
    options.forEach((el) => {
      el.classList.remove("option__button--onClick");
      el.classList.remove("option__button--correct");
      el.classList.remove("option__button--not-correct");
      el.classList.remove("option__button--find-correct");
    });

    setSendAnswer(null);
    setSumbit(false);
    const next = currentQuestion < questionsLength - 1 ? currentQuestion + 1 : questionsLength;
    if (next > 9) return setRender("score")
    setCurrentQuestion(next)
  }
}
