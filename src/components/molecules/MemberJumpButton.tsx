import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';

interface MemberJumpButtonProps {
  title: string;
  name: string;
  slug: string;
}

const MemberJumpButton = ({ title, name, slug }: MemberJumpButtonProps) => {
  const navigate = useNavigate();
  return (
    <CardActionArea
      onClick={() => navigate(`/member#${slug}`)}
      sx={{
        borderRadius: 2,
        p: 1,
        width: '100%',
        transition: 'all 0.2s',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="subtitle1" color="text.primary" >
          {title}
        </Typography>
        <Typography variant="h5" color="text.primary" >
          {name}
        </Typography>
      </Box>
    </CardActionArea>
  );
};

export default MemberJumpButton; 