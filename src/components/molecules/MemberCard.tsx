import { Box, Grid, SxProps, Theme } from '@mui/material';
import { Member } from '../../types/member';
import MemberHeader from './MemberHeader';
import MemberBio from '../atoms/MemberBio';
// import MemberThoughts from './MemberThoughts';
import MemberNavigationPrev from '../atoms/MemberNavigationPrev';
import MemberNavigationNext from '../atoms/MemberNavigationNext';
import DotNavigation from './DotNavigation';
import { Image } from '../atoms/Image';

interface MemberCardProps {
  member: Member;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  sx?: SxProps<Theme>;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, onPrev, onNext, currentIndex, onSelectIndex, sx }) => {

  return (
    <Box sx={{
      ...sx
    }}>
      <Grid container sx={{ mb: 2 }}>
        <Grid size={{xs:2}} >
            <MemberNavigationPrev onClick={onPrev}/>
        </Grid>
        <Grid size={{xs:8}}>
            <Image src={member.imageUrl} alt={member.name} aspectRatio='3:4' margin='0'/>
        </Grid>
        <Grid size={{xs:2}}>
            <MemberNavigationNext onClick={onNext}/>
        </Grid>
      </Grid>
      <DotNavigation 
        count={3} 
        activeIndex={currentIndex} 
        onDotClick={onSelectIndex}
      />
      <MemberHeader member={member} sx={{mt:5,mb:3}}/>
      <MemberBio bio={member.bio} sx={{ px:1 }}/>
      {/* <MemberThoughts thoughts={member.thoughts} /> */}
    </Box>
  );
};

export default MemberCard; 