import { Box, SxProps, Theme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Member } from '../../types/member';
import MemberTitle from '../atoms/MemberTitle';
import MemberName from '../atoms/MemberName';
import SocialLink from '../atoms/SocialLink';

interface MemberHeaderProps {
  member: Member;
  sx?: SxProps<Theme>;
}

const MemberHeader: React.FC<MemberHeaderProps> = ({ member, sx }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, ...sx }}>
    <Box>
      <MemberTitle title={member.title} sx={{}} />
      <MemberName name={member.name} nameEn={member.nameEn} />
    </Box>
    <SocialLink href={member.social.x} icon={<TwitterIcon />} />
  </Box>
);

export default MemberHeader; 