import { Container, Box, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import { Heading1 } from '../atoms/typography/Heading1';
import MembersDisplay from '../molecules/MembersDisplay';

interface MemberPageTemplateProps {
  members: Member[];
  sx?: SxProps<Theme>;
}

const MemberPageTemplate: React.FC<MemberPageTemplateProps> = ({ members, sx }) => (
  <Container maxWidth="md" sx={{ py: 4, ...sx }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Heading1 titleEn="Member" titleJa="メンバー" />
    </Box>
    <MembersDisplay members={members} />
  </Container>
);

export default MemberPageTemplate; 