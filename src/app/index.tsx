import "./style.scss";
import { useScoreStore } from "./store/ScoreStore";
import { useUIStore } from "./store/UIStore";
import { useQuizzesAPI } from "./api/getQuizzes";
import Header from "./layout/header";
import Start from "./features/start";
import Quizzes from "./features/quizzes";
import Score from "./features/score";
import Loading from "./components/Loading";
import Error from "./components/Error";

export default function App(): React.ReactElement {
  const { score } = useScoreStore((state) => state);
  const { setScore } = useScoreStore((state) => state.action);
  const { theme, render, selectQuiz, currentQuestion } = useUIStore((state) => state);
  const { setTheme, setRender, setSelectQuiz, setCurrentQuestion } = useUIStore((state) => state.action);
  const { data, status, error } = useQuizzesAPI();
  if (status === "pending") return <Loading />;
  if (status === "error") return <Error errorData={{ message: error.message }} />;

  const findIndexQuestion = data.map((el) => el.title.toLowerCase()).findIndex((el) => el === selectQuiz);
  if (findIndexQuestion === -1) {
    return <Error errorData={{message: "Not found"}}/>
  }

  return (
    <div className={`app app--${theme}`}>
      <Header
        headerData={{
          theme: theme,
          setTheme: setTheme,
          render: render,
          title: data[findIndexQuestion].title,
          icon: data[findIndexQuestion].icon,
        }}
      />

      <main>
        {render === "start" && (
          <Start
            startData={{
              theme: theme,
              setRender: setRender,
              setSelectQuiz: setSelectQuiz,
              arrayOptions: data.map((item) => ({
                title: item.title,
                icon: item.icon
              }))
            }}
          />
        )}

        {render === "quizzes" && (
          <Quizzes
            quizzesData={{
              theme: theme,
              score: score,
              setScore: setScore,
              setRender: setRender,
              currentQuestion: currentQuestion,
              setCurrentQuestion: setCurrentQuestion,
              question: data[findIndexQuestion].questions[currentQuestion].question,
              questionOption: data[findIndexQuestion].questions[currentQuestion].options,
              questionAnswer: data[findIndexQuestion].questions[currentQuestion].answer,
              questionsLength: data[findIndexQuestion].questions.length,
            }}
          />
        )}

        {render === "score" && (
          <Score
            scoreData={{
              theme: theme,
              title: data[findIndexQuestion].title,
              icon: data[findIndexQuestion].icon,
              score: score,
              setScore: setScore,
              setRender: setRender,
              setSelectQuiz: setSelectQuiz,
              setCurrentQuestion: setCurrentQuestion,
              questionsLength: data[findIndexQuestion].questions.length
            }}
          />
        )}
      </main>
    </div>
  );
}
