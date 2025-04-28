import { Stack, ButtonBase, Avatar, Typography, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';

interface MemberThumbnailNavProps {
  members: Member[];
  currentMemberId: number;
  onSelectMember: (id: number) => void;
  sx?: SxProps<Theme>;
}

const MemberThumbnailNav: React.FC<MemberThumbnailNavProps> = ({ members, currentMemberId, onSelectMember, sx }) => {
  const handleMemberClick = (id: number) => {
    onSelectMember(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2, ...sx }}>
      {members.map((member) => (
        <ButtonBase
          key={member.id}
          onClick={() => handleMemberClick(member.id)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            opacity: member.id === currentMemberId ? 1 : 0.6,
            transition: 'opacity 0.2s',
          }}
        >
          <Avatar src={member.imageUrl} alt={member.name} sx={{ width: 48, height: 48, mb: 0.5 }} />
          <Typography variant="caption" sx={{ textAlign: 'center', lineHeight: 1.2 }}>{member.title}</Typography>
          <Typography variant="caption" sx={{ textAlign: 'center', lineHeight: 1.2, fontWeight: 'medium' }}>{member.name}</Typography>
        </ButtonBase>
      ))}
    </Stack>
  );
};

export default MemberThumbnailNav; 