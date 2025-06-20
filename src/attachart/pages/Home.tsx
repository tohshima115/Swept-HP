import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logoVerticle.svg?url';
import Button from '@/components/atoms/Button';
import { useState } from 'react';
import ExplanationModal from '../components/ExplanationModal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ExplanationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          flexGrow: 1,
          px:2,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        <img src={logoMark} alt="attachartロゴ" style={{ height: 168, width: 'auto' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          愛着スタイル診断テスト
        </Typography>
        <Button
          color='primaryTonal'
          onClick={() => setIsModalOpen(true)}
          startIcon={<HelpOutlineIcon />}
          sizeType='small'
        >
            愛着スタイルとは
        </Button>
        <Typography sx={{ maxWidth: 'xl', textAlign: 'center' }}>
          過去数年間のご自分の傾向を思い浮かべながら、45問の設問に答えてください。<br/>
          診断結果は、あなたの愛着スタイル（安定型・不安型・回避型）を判定し、今後の人間関係や自己理解に役立てることができます。
        </Typography>
        <Button
          component={Link}
          to="/attachart/quiz/1"
          sizeType="large"
          startIcon={<ChecklistIcon />}
        >
          診断をはじめる
        </Button>
        <Typography variant="caption" sx={{ mt: 4, textAlign: 'center', color: 'text.secondary' }}>
          本診断は『愛着障害 ～子ども時代を引きずる人々～』（岡田尊司／光文社新書）のチェックシートを引用し作成しています。
        </Typography>
      </Box>
    </>
  );
} 