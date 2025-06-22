interface Score {
  A: number;
  B: number;
  C: number;
}

export interface CharacterInfo {
  type: 'A' | 'B' | 'C';
  baseName: 'antei' | 'huan' | 'kaihi';
  score: number;
  rank: number;
}

export type Placement = (CharacterInfo | null)[]; // 0:左, 1:中央, 2:右

export const determineCharacterPlacement = (score: Score): Placement => {
  const characters: Omit<CharacterInfo, 'rank'>[] = [
    { type: 'A', score: score.A, baseName: 'antei' },
    { type: 'B', score: score.B, baseName: 'huan' },
    { type: 'C', score: score.C, baseName: 'kaihi' },
  ];

  const sortedByScore = [...characters].sort((a, b) => b.score - a.score);

  const first = sortedByScore[0];
  const second = sortedByScore[1];
  const third = sortedByScore[2];
  
  const placementResult: ('A' | 'B' | 'C' | null)[] = new Array(3).fill(null);

  // Case 1: All 3 scores are different
  if (first.score > second.score && second.score > third.score) {
    placementResult[1] = first.type;
    placementResult[0] = second.type;
    placementResult[2] = third.type;
  }
  // Case 2: Tie for 1st place (2 characters)
  else if (first.score === second.score && second.score > third.score) {
    const topTiers = [first.type, second.type];
    if (topTiers.includes('C') && topTiers.includes('A')) {
      placementResult[1] = 'A'; placementResult[0] = 'C';
    } else if (topTiers.includes('C') && topTiers.includes('B')) {
      placementResult[0] = 'C'; placementResult[1] = 'B';
    } else { // A & B tie
      placementResult[1] = 'A'; placementResult[0] = 'B';
    }
    placementResult[placementResult.indexOf(null)] = third.type;
  }
  // Case 3: Tie for 2nd place (2 characters)
  else if (first.score > second.score && second.score === third.score) {
    placementResult[1] = first.type;
    const secondTiers = [second.type, third.type];
    if (secondTiers.includes('C') && secondTiers.includes('A')) {
      placementResult[0] = 'C'; placementResult[2] = 'A';
    } else if (secondTiers.includes('C') && secondTiers.includes('B')) {
      placementResult[0] = 'C'; placementResult[2] = 'B';
    } else { // A & B tie
      placementResult[0] = 'A'; placementResult[2] = 'B';
    }
  }
  // Case 4: All 3 tie
  else {
    placementResult[0] = 'C';
    placementResult[1] = 'A';
    placementResult[2] = 'B';
  }

  // Final assembly
  const finalPlacement: Placement = new Array(3).fill(null);
  const uniqueSortedScores = [...new Set(characters.map(s => s.score))].sort((a, b) => b - a);

  for (let i = 0; i < 3; i++) {
    const charType = placementResult[i];
    if (charType) {
      const originalChar = characters.find(c => c.type === charType)!;
      finalPlacement[i] = {
        ...originalChar,
        rank: uniqueSortedScores.indexOf(originalChar.score),
      };
    }
  }

  return finalPlacement;
}; 