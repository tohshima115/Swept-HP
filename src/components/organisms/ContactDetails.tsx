import { Box, SxProps, Theme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactInfoItem from '../molecules/ContactInfoItem';
import { Heading2 } from '../atoms/typography';

interface ContactDetailsProps {
    sx?: SxProps<Theme>;
}

const contactInfo = {
    sns: { x: 'https://twitter.com/example' },
    email: 'swept@gmail.com',
    phone: '123-456-7890',
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ sx }) => (
    <Box sx={sx}>
        <Heading2 title={'各種連絡先'}/>
        <ContactInfoItem
            label="SNS"
            value="X (Twitter)"
            link={contactInfo.sns.x}
            icon={<TwitterIcon />}
        />
        <ContactInfoItem
            label="メールアドレス"
            value={contactInfo.email}
            link={`mailto:${contactInfo.email}`}
            showCopy
        />
        <ContactInfoItem
            label="電話番号"
            value={contactInfo.phone}
            link={`tel:${contactInfo.phone.replace(/-/g, '')}`}
            showCopy
        />
    </Box>
);

export default ContactDetails; 