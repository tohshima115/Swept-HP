import { Typography, SxProps, Theme, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface MemberNameProps {
  name: string;
  nameEn: string;
  sx?: SxProps<Theme>;
}

const MemberName: React.FC<MemberNameProps> = ({ name,nameEn, sx }) => {
  const theme = useTheme();
  const firstChar = name.charAt(0);
  const restChars = name.slice(1);

  return (
    <Box>
      <Typography variant="h2" component="p" sx={{ fontWeight: 'bold', ...sx }}>
        <span style={{ color: theme.palette.primary.main }}>{firstChar}</span>
        <span style={{ color: theme.palette.text.primary }}>{restChars}</span>
      </Typography>
      <Typography variant="h5" fontWeight={400} color="text.secondary" sx={{ display: 'block' }}>
        {nameEn}
      </Typography>
    </Box>
);
};
export default MemberName; 