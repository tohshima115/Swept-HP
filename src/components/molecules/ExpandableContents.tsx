// ExpandableText.tsx
import React, { useState } from 'react';
import { Box, Button, Collapse, SxProps, Theme } from '@mui/material';

interface ExpandableContentsProps {
  /** 表示するコンテンツ (テキスト、画像、見出しなど) */
  children: React.ReactNode;
  /** 折りたたまれた状態の高さ (px単位またはCSSの文字列) */
  collapsedHeight?: number | string;
  /** グラデーションの色 (通常は背景色に合わせる) */
  gradientColor?: string;
  /** ルート要素の sx プロパティ */
  sx?: SxProps<Theme>;
  /** Collapse コンポーネントの sx プロパティ */
  collapseSx?: SxProps<Theme>;
  /** Button を含む Box の sx プロパティ */
  buttonContainerSx?: SxProps<Theme>;
  /** アニメーションの長さ (ミリ秒) */
  animationDuration?: number;
}

const ExpandableContents: React.FC<ExpandableContentsProps> = ({
  children,
  collapsedHeight = 104, // デフォルトの折りたたみ時の高さ (例: 100px)
  gradientColor = 'white', // デフォルトのグラデーション終端色 (背景色に合わせる)
  sx,
  collapseSx,
  buttonContainerSx,
  animationDuration = 500,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // グラデーションを適用するためのスタイル
  const collapsedSx: SxProps<Theme> = !expanded
    ? {
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40px', // グラデーションの高さを調整
          background: `linear-gradient(to bottom, transparent, ${gradientColor})`,
          pointerEvents: 'none', // グラデーション部分はクリックできないように
        },
      }
    : {};

  return (
    <Box sx={sx}>
      <Collapse
        in={expanded}
        collapsedSize={collapsedHeight}
        timeout={animationDuration}
        // 複数の sx をマージ
        sx={{ ...collapsedSx, ...collapseSx }}
      >
        {/* 受け取った子要素 (テキスト、Image, Heading2 など) をそのまま表示 */}
        {children}
      </Collapse>
      <Box sx={{ textAlign: 'center', mt: 1, ...buttonContainerSx }}>
        <Button onClick={handleToggle} variant="text">
          {expanded ? '一部を表示' : 'もっと読む'}
        </Button>
      </Box>
    </Box>
  );
};

export default ExpandableContents;