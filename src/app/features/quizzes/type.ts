export type QuizzesProps = {
  quizzesData: {
    theme: string,
    score: number,
    setScore: (score: number) => void,
    setRender: (render: string) => void,
    currentQuestion: number,
    setCurrentQuestion: (currentQuestion: number) => void,
    question: string,
    questionOption: string[],
    questionAnswer: string,
    questionsLength: number
  }
}
