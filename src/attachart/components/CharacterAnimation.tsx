import { useState, useEffect } from 'react';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import { determineCharacterPlacement } from '../utils/determineCharacterPlacement';

interface Score {
  A: number;
  B: number;
  C: number;
}

interface CharacterAnimationProps {
  score: Score;
}

const ANIMATION_INTERVAL_MS = 120;

// 単一のキャラクターアニメーションを担当するサブコンポーネント
const AnimatedCharacter = ({ baseName, size }: { baseName: 'antei' | 'huan' | 'kaihi'; size: number }) => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame % 5) + 1);
    }, ANIMATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = `/assets/${baseName}_0${frame}.png`;
  const altTextMap: { [key in typeof baseName]: string } = {
    antei: '安定型',
    huan: '不安型',
    kaihi: '回避型',
  };

  return <img src={imageUrl} alt={`${altTextMap[baseName]}のキャラクター`} style={{ width: `${size}px`, height: 'auto' }} />;
};

const CharacterAnimation = ({ score }: CharacterAnimationProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 画面サイズに応じて基準となるサイズを定義
  const wrapperSize = isMobile ? 104 : 168;
  const sizeMap: { [key: number]: number } = isMobile 
    ? { 0: 104, 1: 64, 2: 40 } 
    : { 0: 168, 1: 104, 2: 64 };

  const finalPlacement = determineCharacterPlacement(score);
  
  const charactersWithSize = finalPlacement.map(charInfo => 
    charInfo ? { ...charInfo, size: sizeMap[charInfo.rank] ?? (isMobile ? 40 : 64) } : null
  );

  return (
    <Stack direction="row" justifyContent="center" alignItems="flex-end" sx={{ my: 3, minHeight: wrapperSize }}>
      {charactersWithSize.map((charInfo, index) => (
        <Box 
          key={index}
          sx={{
            width: wrapperSize,
            height: wrapperSize,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {charInfo && <AnimatedCharacter baseName={charInfo.baseName} size={charInfo.size} />}
        </Box>
      ))}
    </Stack>
  );
};

export default CharacterAnimation; 