import { Box, SxProps, Theme } from '@mui/material';

export interface MemberImageProps {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
}

const MemberImage: React.FC<MemberImageProps> = ({ src, alt, sx }) => (
  <Box
    sx={{
      width: '100%',
      paddingTop: '125%', // アスペクト比 4:5 を維持 (5/4 * 100%)
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3, // 角丸
      ...sx,
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

export default MemberImage; 