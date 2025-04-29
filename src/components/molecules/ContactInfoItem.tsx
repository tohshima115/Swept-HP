import { Box, Typography, Link as MuiLink, SxProps, Theme } from '@mui/material';
import CopyButton from '../atoms/CopyButton';
import { Heading3 } from '../atoms/typography';

interface ContactInfoItemProps {
    label: string;
    value: string;
    link?: string;
    showCopy?: boolean;
    icon?: React.ReactElement;
    sx?: SxProps<Theme>;
}

const ContactInfoItem = ({ label, value, link, showCopy, icon, sx }: ContactInfoItemProps) => (
    <Box sx={{ mb: 1.5, ...sx }}>
        <Heading3 title={label}/>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon && <Box sx={{ mr: 1, color: 'text.primary' }}>{icon}</Box>}
            {link ? (
                <MuiLink href={link} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                    {value}
                </MuiLink>
            ) : (
                <Typography variant="body1">{value}</Typography>
            )}
            {showCopy && <CopyButton textToCopy={value} sx={{ ml: 0.5 }} />}
        </Box>
    </Box>
);

export default ContactInfoItem; 