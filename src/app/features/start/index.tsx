import "./style.scss";
import type { StartProps } from "./type";

export default function Start(props: StartProps): React.ReactElement {
  const { theme, setRender, setSelectQuiz, arrayOptions } = props.startData;
  function handleSelectQuiz(quiz: string, render: string): void {
    setRender(render);
    setSelectQuiz(quiz);
  }

  return (<>
    <section className={`start start--${theme}`}>
      <div className="wrapper">
        <div className="description">
          <h1 className="description__name">Welcome to the <strong>Frontend Quiz!</strong></h1>
          <p className="description__info">Pick a subject to get started.</p>
        </div>
        <div className="option">
          {arrayOptions.map((option, index) => (
            <button
              className={`option__button option__button--${option.title.toLowerCase()}`}
              key={index}
              type="button"
              onClick={() => handleSelectQuiz(option.title.toLowerCase(), "quizzes")}
            >
              <img src={option.icon} alt={`icon ${option.title}`} />
              <span>{option.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  </>);
}
