import { create } from "zustand";
import { storage } from "../../lib/customLocalStorage";
import type { ScoreStore } from "./type";

export const useScoreStore = create<ScoreStore>((set) => {
  return {
    score: parseInt(storage.read("data-score")) || 0,
    action: {
      setScore: (score: number) => {
        set((state) => ({ score: state.score = score }))
        storage.save("data-score", score.toString());
      }
    }
  }
})
