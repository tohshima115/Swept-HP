import { Box, SxProps, Theme } from '@mui/material';
import { Heading2 } from '../atoms/typography';
import ContactForm from '../molecules/ContactForm';

interface ContactSectionProps {
  sx?: SxProps<Theme>;
}

const ContactSection = ({ sx }: ContactSectionProps) => {
  return (
    <Box sx={sx}>
        <Heading2 title={'フォーム'}/>
        <ContactForm/>
    </Box>
  );
};

export default ContactSection; 