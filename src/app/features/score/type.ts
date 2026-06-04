export type ScoreProps = {
  scoreData: {
    theme: string,
    title: string,
    icon: string,
    score: number,
    questionsLength: number,
    setScore: (score: number) => void,
    setRender: (render: string) => void,
    setSelectQuiz: (selectQuiz: string) => void,
    setCurrentQuestion: (current: number) => void
  }
}
