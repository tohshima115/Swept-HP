import { Box, SxProps, Theme } from '@mui/material';
// import XIcon from '@mui/icons-material/X';
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
        <Box sx={{px:1}}>
            {/* <ContactInfoItem
                label="SNS"
                value="@Swept_skt"
                link={contactInfo.sns.x}
                icon={<XIcon />}
            /> */}
            <ContactInfoItem
                label="メールアドレス"
                value={contactInfo.email}
                link={`mailto:${contactInfo.email}`}
                showCopy
            />
            {/* <ContactInfoItem
                label="電話番号"
                value={contactInfo.phone}
                link={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                showCopy
            /> */}
        </Box>
    </Box>
);

export default ContactDetails; 