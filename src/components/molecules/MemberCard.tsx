import { Box, Grid, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import MemberImage from '../atoms/MemberImage';
import MemberHeader from './MemberHeader';
import MemberBio from '../atoms/MemberBio';
import MemberThoughts from './MemberThoughts';
import MemberNavigationPrev from '../atoms/MemberNavigationPrev';
import MemberNavigationNext from '../atoms/MemberNavigationNext';

interface MemberCardProps {
  member: Member;
  onPrev: () => void;
  onNext: () => void;
  sx?: SxProps<Theme>;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, onPrev, onNext, sx }) => {

  return (
    <Box sx={{
      ...sx
    }}>
      <Grid container sx={{ mb: 2 }}>
        <Grid size={{xs:2}} >
            <MemberNavigationPrev onClick={onPrev}/>
        </Grid>
        <Grid size={{xs:8}}>
            <MemberImage src={member.imageUrl} alt={member.name} />
        </Grid>
        <Grid size={{xs:2}}>
            <MemberNavigationNext onClick={onNext}/>
        </Grid>
      </Grid>
      <MemberHeader member={member} />
      <MemberBio bio={member.bio} sx={{ px:1 }}/>
      <MemberThoughts thoughts={member.thoughts} />
    </Box>
  );
};

export default MemberCard; 