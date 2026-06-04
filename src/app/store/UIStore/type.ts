export type UIState = {
  theme: string,
  render: string,
  selectQuiz: string,
  currentQuestion: number,
  action: {
    setTheme: (theme: string) => void
    setRender: (render: string) => void
    setSelectQuiz: (subject: string) => void
    setCurrentQuestion: (currentQuestion: number) => void
  }
}
