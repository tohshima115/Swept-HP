import { useMemo } from 'react';
import { useQuizAnswers } from './useQuizAnswers';
import { questions } from '../questions';
import { determineAttachmentStyle } from '../utils/determineAttachmentStyle';
import { attachmentTypes, recommendedBooks } from '../resultData';

export const useQuizResult = () => {
  const { answers } = useQuizAnswers();

  const score = useMemo(() => {
    let A = 0, B = 0, C = 0;
    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (!ans) return;
      const choice = q.choices.find(c => c.label === ans);
      if (!choice) return;
      if (choice.score === 'A') A++;
      if (choice.score === 'B') B++;
      if (choice.score === 'C') C++;
    });
    return { A, B, C };
  }, [answers]);

  const resultType = useMemo(() => {
    const { A, B, C } = score;
    return determineAttachmentStyle(A, B, C);
  }, [score]);

  const resultFeature = useMemo(() => {
    const type = attachmentTypes.find(t => t.key === resultType);
    return type ? type.description : '';
  }, [resultType]);

  const recommendedBook = useMemo(() => {
    const { A, B, C } = score;
    const scores = { A, B, C };

    if (A === 0 && B === 0 && C === 0) {
      return recommendedBooks.default;
    }

    const maxScore = Math.max(A, B, C);
    const highestScoringTypes = (Object.keys(scores) as Array<keyof typeof scores>).filter(
      key => scores[key] === maxScore
    );

    if (highestScoringTypes.length === 1) {
      return recommendedBooks[highestScoringTypes[0]];
    }
    
    if (highestScoringTypes.includes('B')) {
      return recommendedBooks.B;
    }
    if (highestScoringTypes.includes('A') && highestScoringTypes.includes('C')) {
      return recommendedBooks.C;
    }

    return recommendedBooks.default;
  }, [score]);

  return {
    score,
    resultType,
    resultFeature,
    recommendedBook,
    referenceBook: recommendedBooks.default
  };
}; 