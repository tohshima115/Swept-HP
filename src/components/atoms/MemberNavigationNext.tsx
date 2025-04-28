import { CardActionArea, SxProps, Theme } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface MemberNavigationNextProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const MemberNavigationNext: React.FC<MemberNavigationNextProps> = ({ onClick, sx }) => (
  <CardActionArea
    onClick={onClick}
    sx={{
      height:'100%',
      display:'flex',
      justifyContent:'center',
      borderRadius:3,
      ...sx
    }}
  >
    <ArrowForwardIosRoundedIcon fontSize="large" sx={{color:'text.disabled'}}/>
  </CardActionArea>
);

export default MemberNavigationNext; 