import { Box, Typography, useTheme, SxProps, Theme } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper'; // ニュース用アイコンの例
import ArticleIcon from '@mui/icons-material/Article'; // ノート用アイコンの例 (StickyNote2Icon なども可)

interface CategoryTagProps {
  /** タグの種類 (true: ニュース, false: ノート) */
  isNews?: boolean;
  /** 表示するテキスト (指定しない場合は isNews に応じてデフォルト表示) */
  text?: string;
  /** ルート要素に追加するスタイル */
  sx?: SxProps<Theme>;
}

const CategoryTag: React.FC<CategoryTagProps> = ({
  isNews = true, // デフォルトはニュース
  text,
  sx,
}) => {
  const theme = useTheme();

  // isNews の値に基づいてスタイルと内容を決定
  const tagConfig = isNews
    ? {
        bgColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        IconComponent: NewspaperIcon,
        defaultText: 'ニュース', // デフォルトテキスト (ニュース)
      }
    : {
        bgColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        IconComponent: ArticleIcon,
        defaultText: 'ノート', // デフォルトテキスト (ノート)
      };

  // 表示するテキストを決定 (props で指定があればそれを使用)
  const displayText = text ?? tagConfig.defaultText;

  return (
    <Box
      sx={{
        display: 'inline-flex', // アイコンとテキストを横並びにする
        alignItems: 'center', // 垂直方向中央揃え
        padding: theme.spacing(0, 1), // 上下: 0px, 左右: 8px のパディング
        borderRadius: '4px', // 角丸
        backgroundColor: tagConfig.bgColor, // 背景色を設定
        color: tagConfig.color, // 文字色・アイコン色を設定
        ...sx, // 外部から渡された sx プロパティをマージ
      }}
    >
      {/* アイコンを表示 */}
      <tagConfig.IconComponent sx={{ fontSize: '24px', marginRight: 1 }} />
      {/* テキストを表示 */}
      <Typography variant="body1" component="span" sx={{ width: { xs: '64px', sm: '72px' }, textAlign:'center' }}>
        {displayText}
      </Typography>
    </Box>
  );
};

export default CategoryTag;