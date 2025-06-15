import { Box, Grid } from '@mui/material';
import { Heading1 } from '../atoms/typography';
import { Image } from '../atoms/Image';
import MemberJumpButton from '../molecules/MemberJumpButton';
import Button from '../atoms/Button';

interface Member {
  title: string;
  name: string;
  slug: string;
}

interface HomeMemberSectionProps {
  navigate: (path: string) => void;
  orderedMembers: Member[];
}

const HomeMemberSection = ({ navigate, orderedMembers }: HomeMemberSectionProps) => (
      <Box my={13} sx={{display:'flex',flexDirection:'column'}}>
        <Heading1 titleEn={'Member'} titleJa={'メンバー'}/>
        <Image src={'/assets/member.avif'} alt={''} aspectRatio='16:9'/>
        <Grid container spacing={2} sx={{ mt: 2, mb:5 }}>
          {orderedMembers.map(member => (
            <Grid size={{xs:4}} key={member.slug}>
              <MemberJumpButton
                title={member.title}
                name={member.name}
                slug={member.slug}
              />
            </Grid>
          ))}
        </Grid>
        <Button color='primaryTonal' onClick={() => navigate('/member')}>
          詳しく見る
        </Button>
      </Box>
);

export default HomeMemberSection; 