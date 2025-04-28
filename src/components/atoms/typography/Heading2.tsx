import { Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Propsインターフェース
export interface Heading2Props {
  title: string;
}

// StyledBox: 全幅のトップボーダー（疑似要素で描画）を持つコンテナ
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'relative', // 疑似要素の基準点
  paddingTop: '2px', // 線の高さ分のスペースを確保
  '&::before': { // 全幅の線 (divider色、疑似要素で描画)
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.divider,
    borderRadius: '8px', // 線の端を丸める
  },
}));

// Heading2 コンポーネント
export const Heading2 = ({ title }: Heading2Props) => {
  const theme = useTheme();
  const lineHeight = '2px'; // 線の高さ（変数にしておくと便利）
  const borderRadiusValue = '8px'; // 角丸の半径（線の高さの半分）

  return (
    // 全体のマージン調整用 (必要に応じて)
    <Box sx={{ mt: 5, mb: 3 }}> {/* 上下のマージン例 */}
      <StyledBox>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            // --- スタイルのポイント ---
            display: 'inline-block', // コンテンツ幅に合わせる
            color: 'text.secondary', // テキストの色
            position: 'relative', // 疑似要素の基準点 & 位置調整のため
            marginTop: `-${lineHeight}`, // 上に移動して下の線に重ねる
            // パディング:
            // pt: 上の線とテキストの間のスペース (元の値 + 線の高さ)
            // px: テキストの左右のスペース (この範囲も背景色で覆われる)
            pt: `calc(${theme.spacing(1)} + ${lineHeight})`, // 上パディング調整
            px: 1, // 左右パディング
            // Typography自身の線 (primary色、疑似要素で描画)
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, // Typographyの上端に配置
              left: 0,
              width: '100%', // Typographyの幅に合わせる
              height: lineHeight,
              backgroundColor: theme.palette.primary.main,
              borderRadius: borderRadiusValue, // 線の端を丸める
            },
          }}
        >
          {title} {/* 見出しテキスト */}
        </Typography>
      </StyledBox>
    </Box>
  );
};