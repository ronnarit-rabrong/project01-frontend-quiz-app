export type ScoreStore = {
  score: number,
  action: {
    setScore: (score: number) => void
  }
}
