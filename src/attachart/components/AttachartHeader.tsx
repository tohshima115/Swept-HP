import { AppBar, Box, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import logoMark from '../assets/logoMark.svg?url';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@/components/atoms/Button';
import QuizProgressDots from './QuizProgressDots';

const AttachartHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // 画面判定
  const isHome = location.pathname === '/attachart' || location.pathname === '/attachart/';
  const isQuiz = location.pathname.startsWith('/attachart/quiz');
  const isResult = location.pathname.startsWith('/attachart/result');

  // 左端ボタン
  let leftButton = null;
  if (isHome) {
    leftButton = (
      <Button 
        color="primaryTonal" 
        onClick={() => window.location.href = '/'} 
        sizeType={isMobile ? 'small' : 'medium'}
      >
        Sweptへ
      </Button>
    );
  } else if (isQuiz) {
    leftButton = (
      <Button 
        color="primaryTonal" 
        onClick={() => navigate(-1)} 
        sizeType={isMobile ? 'small' : 'medium'}
      >
        戻る
      </Button>
    );
  } else if (isResult) {
    leftButton = (
      <Button 
        color="primaryTonal" 
        onClick={() => navigate('/attachart')} 
        sizeType={isMobile ? 'small' : 'medium'}
      >
        トップへ
      </Button>
    );
  }

  // 右端ボタン
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/attachart`;
    if (navigator.share) {
      navigator.share({
        title: '愛着スタイル診断テスト',
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('URLをコピーしました');
    }
  };

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.appBar,
      display: 'flex',
      justifyContent: 'center',
      my: 2,
    }}>
      <AppBar 
        position="static"
        color="transparent" 
        elevation={0} 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(16px)',
          p: 1,
          borderRadius: '100px',
          width: 'calc(100% - 32px)',
          maxWidth: '1200px',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.12)',
          transition: 'box-shadow 0.3s',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%',
          px:{xs:'4px',md:'0px'}
        }}>
          {/* 左端ボタン */}
          <Box sx={{ minWidth: {xs:100,md:144} }}>{leftButton}</Box>
          {/* 中央ロゴ */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logoMark} alt="attachartロゴ" style={{ height: 48, width: 'auto' }} />
          </Box>
          {/* 右端ボタン or 進捗ドット */}
          <Box sx={{ minWidth: {xs:100,md:144}, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {isQuiz ? (
              <QuizProgressDots />
            ) : (
              <Button
                sizeType={isMobile ? 'small' : 'medium'}
                color="primaryTonal"
                variant="contained"
                startIcon={<ShareIcon />}
                onClick={handleShare}
              />
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default AttachartHeader; 