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
