export type ScoreType = 'A' | 'B' | 'C' | null;
export type ChoicePosition = 'left' | 'center' | 'right';

export interface Choice {
  label: string;
  score: ScoreType;
  position: ChoicePosition;
}

export interface Question {
  id: number;
  question: string;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: '積極的に新しいことをしたり、新しい場所に出かけたり、新しい人に会ったりする方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  // ... 他の質問は同じなので省略 ...
]; 