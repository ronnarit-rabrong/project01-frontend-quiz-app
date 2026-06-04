# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![preview](./public/assets/images/preview.jpg)

### Links

- Solution URL: [my-github](https://github.com/ronnarit-rabrong/project01-frontend-quiz-app)
- Live Site URL: [live-website](https://ronnarit-rabrong.github.io/project01-frontend-quiz-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### My Learn

#### Sate management with zustand

This project using Single-Page Application (SPA) concept. don't use route or etc..
using state management for render pagwe start, quizzes or score page.


```typescript
import { create } from "zustand";
import { storage } from "../../lib/customLocalStorage";
import type { UIState } from "./type";

export const useUIStore = create<UIState>((set) => {
  return {
    theme: storage.read("data-theme") || "light", // light | dark
    render: storage.read("data-render") || "start", // start | quizzes | score
    selectQuiz: storage.read("data-selectQuiz") || "html", // html | css | javascript | accessibility
    currentQuestion: parseInt(storage.read("data-currentQuestion")) || 0 , // 0 - 9
    action: {
      setTheme:(theme: string) => {
        set((state) => ({ theme: state.theme = theme }));
        storage.save("data-theme", theme);
      },
      setRender: (render: string) => {
        set((state) => ({ render: state.render = render }));
        storage.save("data-render", render);
      },
      setSelectQuiz: (selectQuiz: string) => {
        set((state) => ({ selectQuiz: state.selectQuiz = selectQuiz }));
        storage.save("data-selectQuiz", selectQuiz);
      },
      setCurrentQuestion: (currentQuestion: number) => {
        set((state) => ({ currentQuestion: state.currentQuestion = currentQuestion }));
        storage.save("data-currentQuestion", currentQuestion.toString());
      }
    }
  }
})
```

#### Tanstack query

for fetch api i use tanstack query for fetch and cache data

```typescript
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
  const response = await fetch("/project01-frontend-quiz-app/data.json");
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  const quizzes = json.quizzes;
  return quizzes
}

export function useQuizzesAPI() {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: async () => getQuizzes(),
    staleTime: 15 * 60 * 1000 // delay fetch data
  })
}

```

## Author

- Frontend Mentor - [@ronnarit rabrong](https://www.frontendmentor.io/profile/ronnarit-rabrong)
