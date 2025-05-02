import { Typography, SxProps, Theme } from '@mui/material';
import React from 'react';

interface ResponsiveTypographyProps {
  /** どのブレークポイント以上で切り替えるか（例: 'sm', 'md'） */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  /** xsサイズ時のTypographyバリアント */
  variantXs: React.ComponentProps<typeof Typography>['variant'];
  /** breakpoint以上の時のTypographyバリアント */
  variantSm: React.ComponentProps<typeof Typography>['variant'];
  /** フォントウェイト（任意） */
  fontWeight?: number | string;
  /** テキストカラー（デフォルト: text.primary） */
  color?: string;
  /** xsサイズ時の追加sx */
  sxXs?: SxProps<Theme>;
  /** breakpoint以上の時の追加sx */
  sxSm?: SxProps<Theme>;
  /** テキスト内容（両方同じ場合） */
  children?: React.ReactNode;
  /** xsサイズ時のテキスト内容（任意） */
  childrenXs?: React.ReactNode;
  /** breakpoint以上のテキスト内容（任意） */
  childrenSm?: React.ReactNode;
}

const ResponsiveTypography: React.FC<ResponsiveTypographyProps> = ({
  breakpoint = 'sm',
  variantXs,
  variantSm,
  fontWeight,
  color = 'text.primary',
  sxXs,
  sxSm,
  children,
  childrenXs,
  childrenSm,
}) => {
  // MUIのsxでdisplay切り替え
  const displayXs = { display: { xs: 'block', [breakpoint]: 'none' } };
  const displaySm = { display: { xs: 'none', [breakpoint]: 'block' } };

  return (
    <>
      <Typography
        variant={variantXs}
        fontWeight={fontWeight}
        color={color}
        sx={{ ...displayXs, ...sxXs }}
      >
        {childrenXs !== undefined ? childrenXs : children}
      </Typography>
      <Typography
        variant={variantSm}
        fontWeight={fontWeight}
        color={color}
        sx={{ ...displaySm, ...sxSm }}
      >
        {childrenSm !== undefined ? childrenSm : children}
      </Typography>
    </>
  );
};

export default ResponsiveTypography; 