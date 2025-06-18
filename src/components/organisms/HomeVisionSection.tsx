import {  Box, Typography } from '@mui/material';
import { Heading1 } from '../atoms/typography';
import Button from '../atoms/Button';

interface HomeVisionSectionProps {
  navigate: (path: string) => void;
}

const HomeVisionSection = ({ navigate }: HomeVisionSectionProps) => (
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Heading1 titleEn={'Vision'} titleJa={'理念'}/>
        <Typography variant='h3' mt={3} mb={5} color='text.primary' sx={{display:'flex', justifyContent:'center'}}>
          自分の人生を
          自分のものに
        </Typography>
        <Button color='primaryTonal' onClick={() => navigate('/vision')}>
          詳しく見る
        </Button>
      </Box>
);

export default HomeVisionSection; 