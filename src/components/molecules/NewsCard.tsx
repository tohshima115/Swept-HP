import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  SxProps,
  Theme,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CategoryTag from '../atoms/CategoryTag';
import { Image } from '../atoms/Image';
import { BASE_FONT_SIZE_MOBILE, BASE_FONT_SIZE_DESKTOP } from '../../styles/theme';

interface NewsCardProps {
  /** 記事の日付 (文字列) */
  date: string;
  /** 記事のタイトル */
  title: string;
  /** タグの種類 (true: ニュース, false: ノート) */
  isNews?: boolean;
  /** Imageコンポーネントに渡す画像のsrc */
  imageSrc: string;
  /** Imageコンポーネントに渡す画像のaltテキスト */
  imageAlt: string;
  /** カードクリック時の処理 */
  onClick?: () => void;
  /** ルート要素 (Card) に追加するスタイル */
  sx?: SxProps<Theme>;
}

const ImageContainer = styled(Grid)(({ theme }) => {
  const body1FontSize = BASE_FONT_SIZE_MOBILE;
  const body1FontSizeDesktop = BASE_FONT_SIZE_DESKTOP;
  const multiplier = 3.2;
  const additionalHeight = 16;
  const lineHeightMultiplier = 1.5;

  return {
    height: `calc(${body1FontSize}px * ${multiplier} + ${additionalHeight}px + ${body1FontSize}px * ${lineHeightMultiplier})`,
    [theme.breakpoints.up('sm')]: {
      height: `calc(${body1FontSizeDesktop}px * ${multiplier} + ${additionalHeight}px + ${body1FontSizeDesktop}px * ${lineHeightMultiplier})`,
    },
  };
});

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  title,
  isNews = true,
  imageSrc,
  imageAlt,
  onClick,
  sx,
}) => {
  return (
    <Card sx={{ display: 'flex',my:3, backgroundColor: 'transparent', ...sx }} elevation={0} >
      {/* CardActionArea でカード全体をクリック可能にする */}
      <CardActionArea
        onClick={onClick}
        sx={{ width: '100%', py: 1, borderRadius: '16px' }} // Flexbox を有効に
      >
        <Grid container spacing={2}>
          <ImageContainer size={{xs:4,sm:3,md:2}} sx={{pl:1}}>
            {/* 画像表示エリア */}
            {/* 作成済みのImageコンポーネントを使用 */}
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              margin='0' 
              borderRadius={2} 
            />
          </ImageContainer>

          <Grid size={{xs:8,sm:9,md:10}} sx={{pr:1}}>
            {/* テキストコンテンツエリア */}
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column', // 要素を縦に並べる
                p: 0, // パディングを少し小さめに
                '&:last-child': { pb: 0 }, // CardContent のデフォルトの下パディングを上書き
              }}
            >
              {/* 上段: タグと日付 */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between', // タグと日付を両端に
                  alignItems: 'center', // 垂直方向中央揃え
                  mb: 2, // タイトルとの間にマージン
                }}
              >
                {/* CategoryTagコンポーネントを使用 */}
                <CategoryTag isNews={isNews} />
                {/* 日付を表示 */}
                <Typography variant="body1" color="text.secondary">
                  {date}
                </Typography>
              </Box>

              {/* 下段: 記事タイトル */}
              <Typography
                variant="h5" // 少し小さめのフォント
                component="p"
                sx={{
                  // タイトルが長い場合に省略記号(...)を表示するスタイル
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2, // 表示する行数を2行に制限
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;

{/* --- 使用例 ---
import React from 'react';
import { Stack } from '@mui/material';
import NewsCard from './NewsCard';

function App() {
  const handleCardClick = (cardTitle: string) => {
    console.log(`Card clicked: ${cardTitle}`);
    // ここでページ遷移などの処理を行う
  };

  return (
    <Stack spacing={2} sx={{ p: 2, maxWidth: 400 }}>
      <NewsCard
        date="2025/04/28"
        title="新しい機能が追加されました！詳細はこちらをご覧ください。"
        isNews={true}
        imageSrc="https://placehold.co/100x100/E8F5E9/4CAF50?text=News" // ダミー画像URL
        imageAlt="新機能のお知らせ"
        onClick={() => handleCardClick('新機能のお知らせ')}
      />
      <NewsCard
        date="2025/04/27"
        title="開発ノート：コンポーネント設計の裏側と思考プロセス"
        isNews={false}
        imageSrc="https://placehold.co/100x100/F3E5F5/9C27B0?text=Note" // ダミー画像URL
        imageAlt="開発ノート"
        onClick={() => handleCardClick('開発ノート')}
      />
       <NewsCard
        date="2025/04/26"
        title="非常に長いタイトルのテストです。このタイトルは指定した行数（現在は2行）を超えると省略記号が表示されるはずです。"
        isNews={true}
        imageSrc="https://placehold.co/100x100/E8F5E9/4CAF50?text=Long" // ダミー画像URL
        imageAlt="長いタイトル"
        onClick={() => handleCardClick('長いタイトル')}
      />
    </Stack>
  );
}

export default App; */}
