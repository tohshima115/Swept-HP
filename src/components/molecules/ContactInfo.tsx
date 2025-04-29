import { Box, Typography, SxProps, Theme } from '@mui/material';
import CopyButton from '../atoms/CopyButton';

interface ContactInfoProps {
  sx?: SxProps<Theme>;
}

const ContactInfo = ({ sx }: ContactInfoProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, ...sx }}>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          メールアドレス
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">info@swept.co.jp</Typography>
          <CopyButton textToCopy="info@swept.co.jp" />
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          電話番号
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">03-1234-5678</Typography>
          <CopyButton textToCopy="03-1234-5678" />
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          住所
        </Typography>
        <Typography variant="body1">
          東京都渋谷区神宮前1-1-1
          <br />
          Sweptビル 3F
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo; 