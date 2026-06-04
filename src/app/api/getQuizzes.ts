import { useQuery } from "@tanstack/react-query";

type Quizzes = {
  title: string,
  icon: string,
  questions: {
    question: string,
    answer: string,
    options: string[]
    }[]
}

const getQuizzes = async (): Promise<Array<Quizzes>> => {
  const response = await fetch("data.json");
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  const quizzes = json.quizzes;
  return quizzes
}

export function useQuizzesAPI() {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: async () => getQuizzes(),
    staleTime: 15 * 60 * 1000
  })
}
