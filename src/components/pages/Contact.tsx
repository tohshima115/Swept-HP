import { Box, Container } from '@mui/material';
import { Heading1, Heading2, Heading3 } from '@/components/atoms/typography';

const Contact = () => {
  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Heading1 titleEn="Contact" titleJa="お問い合わせ" />
        <Heading2 title="お問い合わせフォーム" />
        <Box component="section" sx={{ mt: 4 }}>
          <Heading3 title="お名前" required />
          {/* フォームの入力フィールドなど */}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
