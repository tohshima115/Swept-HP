import { CardActionArea, SxProps, Theme } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

interface MemberNavigationPrevProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const MemberNavigationPrev: React.FC<MemberNavigationPrevProps> = ({ onClick, sx }) => (
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
    <ArrowBackIosRoundedIcon fontSize="large" sx={{color:'text.disabled'}}/>
  </CardActionArea>
);

export default MemberNavigationPrev; 