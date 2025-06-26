import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logoVerticle.svg?url';
import Button from '@/components/atoms/Button';
import { useState } from 'react';
import ExplanationModal from '../components/ExplanationModal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ListAltIcon from '@mui/icons-material/ListAlt';

// InfoCardコンポーネント
function InfoCard({ icon, label, valueNum, valueUnit }: { icon: React.ReactNode; label: string; valueNum: string; valueUnit: string }) {
  return (
    <Card variant='outlined' 
    sx={{ 
      bgcolor: 'background.default', 
      borderWidth: 2, 
      borderStyle: 'solid', 
      borderColor: 'divider', borderRadius:'12px' }}>
      <CardContent sx={{ p: 2,display:'flex',flexDirection:'column',  alignItems:'center' }}>
        <Box sx={{ color: 'primary.main', fontSize: '32px', display: 'flex', alignItems: 'center' }}>
          {icon}
        </Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{mb:1}}>
          {label}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <Typography variant="h3" component="span" sx={{ lineHeight: 1,ml:2 }}>
            {valueNum}
          </Typography>
          <Typography variant="body1" component="span" sx={{ ml: 0.5 }}>
            {valueUnit}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

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
          px:2,
          maxWidth: 'sm',
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
        <Grid container spacing={2} justifyContent="center" sx={{ my: 1,width:'100%' }}>
          <Grid size={{ xs:6}}>
            <InfoCard icon={<ListAltIcon fontSize="inherit"/>} label="問題数" valueNum="45" valueUnit="問" />
          </Grid>
          <Grid size={{ xs:6}}>
            <InfoCard icon={<QueryBuilderIcon fontSize="inherit"/>} label="所要時間" valueNum="5" valueUnit="分" />
          </Grid>
        </Grid>
        <Button
          component={Link}
          to="/attachart/quiz/1"
          sizeType="large"
          startIcon={<ChecklistIcon />}
          fullWidth
        >
          診断をはじめる
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          診断結果は、あなたの愛着スタイル（安定型・不安型・回避型）を判定し、今後の人間関係や自己理解に役立てることができます。
        </Typography>
        <Typography variant="caption" sx={{ mt: 4, textAlign: 'center', color: 'text.secondary' }}>
          本診断は『愛着障害 ～子ども時代を引きずる人々～』（岡田尊司／光文社新書）のチェックシートを引用し作成しています。
        </Typography>
      </Box>
    </>
  );
} 