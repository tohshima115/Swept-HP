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

  const finalPlacement = determineCharacterPlacement(score);
  
  // 1. 新しいサイズ定義
  const sizes = {
    rank0: isMobile ? 112 : 208, // 1位
    rank1: isMobile ? 84 : 158,  // 2位
    rank2: isMobile ? 56 : 104,   // 3位
  };

  const wrapperSizes = {
    rank0: isMobile ? 112 : 208,
    rank1_2: isMobile ? 84 : 158,
  };

  // 2. スコアに基づいて同率状態を正確に判定
  const sortedScores = Object.values(score).sort((a, b) => b - a);
  const isAllTie = sortedScores[0] === sortedScores[1] && sortedScores[1] === sortedScores[2];
  const isTopTwoTie = !isAllTie && sortedScores[0] === sortedScores[1];

  // 3. 表示するキャラクターの情報を計算
  const charactersToRender = finalPlacement.map(charInfo => {
    if (!charInfo) {
      return null; // もともと表示されないキャラクター
    }
    // 1位-2位同率の場合、3位(rank:2)のキャラクターは表示しない
    if (isTopTwoTie && charInfo.rank === 2) {
      return null;
    }

    let size;
    let wrapperSize;

    if (isAllTie) {
      // 全員同率なら、全員「2位のサイズ」
      size = sizes.rank1;
      wrapperSize = wrapperSizes.rank1_2;
    } else if (isTopTwoTie) {
      // 1-2位同率なら、該当キャラは「1位のサイズ」
      size = sizes.rank0;
      wrapperSize = wrapperSizes.rank0;
    } else {
      // 通常時
      size = sizes[`rank${charInfo.rank}` as keyof typeof sizes];
      wrapperSize = charInfo.rank === 0 ? wrapperSizes.rank0 : wrapperSizes.rank1_2;
    }

    return { ...charInfo, size, wrapperSize };
  });

  return (
    <Stack direction="row" justifyContent="center" alignItems="flex-end" sx={{ my: 3, minHeight: wrapperSizes.rank0 }}>
      {charactersToRender.map((charInfo, index) => {
        // 表示情報がない場合は、レイアウトを維持するための空のBoxを配置
        if (!charInfo) {
          const emptyWrapperSize = wrapperSizes.rank1_2;
          return <Box key={index} sx={{ width: emptyWrapperSize, height: emptyWrapperSize }} />;
        }

        return (
          <Box 
            key={index}
            sx={{
              width: charInfo.wrapperSize,
              height: charInfo.wrapperSize,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              pb: charInfo.rank === 1 ? (isMobile ? '3.5px' : '7px') : charInfo.rank === 2 ? (isMobile ? '7px' : '14px') : 0,
            }}
          >
            <AnimatedCharacter baseName={charInfo.baseName} size={charInfo.size} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default CharacterAnimation; 