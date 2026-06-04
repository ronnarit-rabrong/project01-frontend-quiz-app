import "./style.scss"
import type { ScoreProps } from "./type"

export default function Score(props: ScoreProps): React.ReactElement {
  const {
    theme,
    title,
    icon,
    score,
    setScore,
    setRender,
    setSelectQuiz,
    setCurrentQuestion,
    questionsLength,
  } = props.scoreData;

  function handlReset() {
    setScore(0);
    setRender("start");
    setSelectQuiz("html");
    setCurrentQuestion(0);
  }

  return (<>
    <section className={`score score--${theme}`}>
      <div className="wrapper">
        <h3 className="info">Quiz completed <strong>You scored...</strong></h3>
        <div className="display">
          <div className="score">
            <div className={`subject subject--${title.toLowerCase()}`}>
              <img className="subject__icon" src={icon} alt="icon"/>
              <p className="subject__name">{title}</p>
            </div>
            <h2 className="score__result">{score}</h2>
            <p className="score__count">out of {questionsLength }</p>
          </div>
          <button className="reset-button" onClick={handlReset}>Play Again</button>
        </div>
      </div>
    </section>
  </>)
}
