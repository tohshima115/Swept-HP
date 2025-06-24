import { Box, Typography } from '@mui/material';
import Logo from '@/components/atoms/Logo';
import Button from '@/components/atoms/Button';
import { sendGAEvent } from '@/lib/ga';

const AboutSwept = () => {
  return (
    <Box>
      <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        この診断ツールについて
      </Typography>
      <Box
        sx={{
          p: 2,
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{mx:'auto'}}>
        <Logo variant="vertical" size={168}/>
        </Box>
        <Typography variant="body2" color='text.primary' sx={{ mt:2, mb: 1, textAlign: 'left'}}>
          この愛着スタイル診断は、Sweptが開発・デザインを行いました。Sweptは、愛着の問題に関心を持つメンバーが集まり、テクノロジーで課題解決を目指す社会起業チームです。
        </Typography>
        <Typography variant="subtitle2" color='text.secondary' sx={{ mb: 3, textAlign: 'left'}}>
            なお、診断の質問項目や判定基準は、精神科医の岡田尊司氏の著作を参考に作成しており、本診断は医学的診断に代わるものではありません。
            </Typography>
        <Button
          component="a"
          color="primary"
          sizeType="medium"
          variant="contained"
          href="https://swept.jp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendGAEvent('go_to_home', { label: 'Sweptホーム' })}
        >
          Sweptのサイトを見る
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSwept; 