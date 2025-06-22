import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface Score {
  A: number;
  B: number;
  C: number;
}

interface CharacterAnimationProps {
  score: Score;
}

const getCharacterBaseNameFromScore = (score: Score): 'antei' | 'huan' | 'kaihi' => {
  const { A, B, C } = score;
  
  if (A === 0 && B === 0 && C === 0) {
    return 'antei'; // デフォルトは安定
  }
  
  const maxScore = Math.max(A, B, C);
  
  // スコアが最大値であるキーを特定する
  const highestScoringKeys: ('A' | 'B' | 'C')[] = [];
  if (A === maxScore) highestScoringKeys.push('A');
  if (B === maxScore) highestScoringKeys.push('B');
  if (C === maxScore) highestScoringKeys.push('C');

  let characterTypeKey: 'A' | 'B' | 'C' = 'A';

  if (highestScoringKeys.length === 1) {
    characterTypeKey = highestScoringKeys[0];
  } else {
    if (highestScoringKeys.includes('B')) {
      characterTypeKey = 'B'; // 不安(B)が優勢
    } else if (highestScoringKeys.includes('C')) {
      characterTypeKey = 'C'; // 回避(C)が優勢
    } else {
      characterTypeKey = 'A'; // 安定(A)
    }
  }

  const typeMap = {
    A: 'antei',
    B: 'huan',
    C: 'kaihi',
  } as const;

  return typeMap[characterTypeKey];
};

const ANIMATION_INTERVAL_MS = 120; // 0.2秒

const CharacterAnimation = ({ score }: CharacterAnimationProps) => {
  const [frame, setFrame] = useState(1);
  
  const characterBaseName = getCharacterBaseNameFromScore(score);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame % 5) + 1);
    }, ANIMATION_INTERVAL_MS); // 0.2秒ごとにフレームを更新

    return () => clearInterval(interval);
  }, []);

  const imageUrl = `/assets/${characterBaseName}_0${frame}.png`;

  const altTextMap: { [key in 'antei' | 'huan' | 'kaihi']: string } = {
    'antei': '安定型',
    'huan': '不安型',
    'kaihi': '回避型'
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <img src={imageUrl} alt={`${altTextMap[characterBaseName]}のキャラクター`} style={{ width: '168px', height: 'auto' }} />
    </Box>
  );
};

export default CharacterAnimation; 