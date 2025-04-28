import { Box, Typography, SxProps, Theme } from '@mui/material';
import { Heading2 } from '../atoms/typography/Heading2';

interface MemberThoughtsProps {
  thoughts: string;
  sx?: SxProps<Theme>;
}

const MemberThoughts: React.FC<MemberThoughtsProps> = ({ thoughts, sx }) => (
  <Box sx={sx}>
    <Heading2 title="事業への想い" />
    <Typography component="p" sx={{px:1}}>
      {thoughts}
    </Typography>
  </Box>
);

export default MemberThoughts; 