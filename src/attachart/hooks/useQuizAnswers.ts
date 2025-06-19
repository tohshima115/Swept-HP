import { create } from 'zustand';

interface QuizAnswersStore {
  answers: (string | null)[];
  setAnswer: (index: number, value: string) => void;
  resetAnswers: () => void;
}

export const useQuizAnswers = create<QuizAnswersStore>((set) => ({
  answers: Array(45).fill(null),
  setAnswer: (index: number, value: string) =>
    set((state) => {
      const newAnswers = [...state.answers];
      newAnswers[index] = value;
      return { answers: newAnswers };
    }),
  resetAnswers: () => set({ answers: Array(45).fill(null) }),
})); 