import {  Box, Typography } from '@mui/material';
import { Heading1 } from '../atoms/typography';
import Button from '../atoms/Button';
import { Image } from '../atoms/Image';

interface HomeServiceSectionProps {
  navigate: (path: string) => void;
}

const HomeServiceSection = ({ navigate }: HomeServiceSectionProps) => (
      <Box my={13}>
        <Heading1 titleEn={'Service'} titleJa={'事業内容'}/>
        <Box p={3} mt={3} sx={theme => ({
          position: 'relative',
          borderRadius: '24px',
          zIndex: 0,
          overflow: 'hidden',
          background: theme.palette.background.default,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            padding: '4px',
            background: 'var(--gradient-primary)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            pointerEvents: 'none',
            zIndex: 1,
          },
        })}>
          <Image src={'/assets/logo_yoko.svg'} alt={''} />
        </Box>
        <Typography variant='h3' color='text.primary' mt={2}>
          ataccha（アタッチャ）
        </Typography>
        <Typography variant='h6' color='text.secondary' mt={1}>
          あなたの最初の「こころの安全基地」となるAI
        </Typography>
        <Typography mb={5} mt={2}>
          あなたが過去の経験と向き合い、自分自身や他者とのより良い関係性を築くための信頼できる最初の相談相手となり、人生をともに歩んでいきます。
        </Typography>
        <Button onClick={() => navigate('/service')}>
          詳しく見る
        </Button>
      </Box>
);

export default HomeServiceSection; 