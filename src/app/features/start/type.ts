export type StartProps = {
  startData: {
    theme: string,
    setRender: (render: string) => void,
    setSelectQuiz: (selectQuiz: string) => void,
    arrayOptions: {
      title: string,
      icon: string
    }[]
  }
}
