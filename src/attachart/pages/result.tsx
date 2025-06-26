import { Box, Typography, Snackbar, Alert, Grid } from '@mui/material';
import { useState } from 'react';
import ReferenceBookCard from '../components/ReferenceBookCard';
import ExplanationModal from '../components/ExplanationModal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@/components/atoms/Button';
import { useQuizResult } from '../hooks/useQuizResult';
import { useQuizAnswers } from '../hooks/useQuizAnswers';
import { RadarChart } from '../components/RadarChart';
import { ResultForm, FormData } from '../components/ResultForm';
import CharacterAnimation from '../components/CharacterAnimation';
import AboutSwept from '../components/AboutSwept';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SnsShareModal from '../components/SnsShareModal';

export default function Result() {
  const { score, resultType, resultFeature, recommendedBook, referenceBook } = useQuizResult();
  const { answers } = useQuizAnswers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    const payload = {
      ...formData,
      score,
      resultType,
      resultFeature,
      recommendedBookTitle: recommendedBook.title,
      referenceBookTitle: referenceBook.title,
      answers: { ...answers },
    };

    try {
      const response = await fetch('/api/submit-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || '送信に失敗しました。');
      }

      setFeedback({ open: true, message: '診断結果をメールで送信しました！', severity: 'success' });
      return Promise.resolve();

    } catch (error) {
      const message = error instanceof Error ? error.message : '不明なエラーが発生しました。';
      setFeedback({ open: true, message: `送信に失敗しました: ${message}`, severity: 'error' });
      return Promise.reject(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseFeedback = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setFeedback({ ...feedback, open: false });
  };

  const handleShareSNS = async (platform: 'x' | 'facebook' | 'line') => {
    // SNSシェア用テキスト
    const text = `【愛着スタイル診断】\nあなたのタイプ: ${resultType}\n安定スコア: ${score.A} / 不安スコア: ${score.B} / 回避スコア: ${score.C}\n#愛着スタイル診断`;
    const shareUrl = window.location.origin + `/attachart/result/${typeToRoman(resultType)}/${score.A}-${score.B}-${score.C}`;
    const url = encodeURIComponent(shareUrl);

    // SNSシェア時にもスプレッドシート送信（フォームデータは空欄でOK）
    const payload = {
      nickname: '',
      ageRange: '',
      gender: '',
      email: '',
      interviewAccepted: false,
      receiveNewsletter: false,
      score,
      resultType,
      resultFeature,
      recommendedBookTitle: recommendedBook.title,
      referenceBookTitle: referenceBook.title,
      answers: { ...answers },
    };
    try {
      await fetch('/api/submit-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // シェア情報の記録に失敗した場合の処理は不要なので、何もしない
    }

    if (platform === 'x') {
      window.open(`https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    } else if (platform === 'line') {
      window.open(`https://social-plugins.line.me/lineit/share?url=${url}`, '_blank');
    } else if (platform === 'facebook') {
      const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      console.log('FacebookシェアURL:', fbShareUrl);
      window.open(fbShareUrl, '_blank');
    }
    setShareModalOpen(false);
  };

  // 日本語タイプ→ローマ字変換
  function typeToRoman(type: string): string {
    switch(type) {
      case '安定型': return 'antei';
      case '安定一不安型': return 'antei_fuan';
      case '安定一回避型': return 'antei_kaihi';
      case '安定一不安一回避型': return 'antei_fuan_kaihi';
      case '恐れ一回避型': return 'osore_kaihi';
      case '不安型': return 'fuan';
      case '回避型': return 'kaihi';
      case '不安—安定型': return 'fuan_antei';
      case '回避一安定型': return 'kaihi_antei';
      default: return 'antei';
    }
  }

  return (
    <>
      <ExplanationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Box
        component="main"
        sx={{
         maxWidth:'800px',
          mx: 'auto',
          py: 4,
          color: 'var(--color-on-surface)',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          診断結果
        </Typography>
        <Box
          sx={{
            mb: 4,
            p: 3,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'var(--color-surface-variant)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <RadarChart score={score} />
          <Box sx={{display:'flex',width:'100%',justifyContent: 'center',alignItems:'center'}}>
            <Typography variant="h4" sx={{ textAlign: 'center',mr:1,ml:6 }}>
                あなたの愛着スタイル
            </Typography>
            <Button
            onClick={() => setIsModalOpen(true)}
            startIcon={<HelpOutlineIcon />}
            sizeType='small'
            variant='text'
            >
            </Button>
            </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2, mb: 2 }}>
            <Typography
              component="span"
              color='primary.main'
              variant='h2'
              sx={{
                px: 2,
                py: 1,
                borderRadius: 'full',
              }}
            >
              {resultType}
            </Typography>
          </Box>
          <Typography sx={{ mt: 2, color: 'var(--color-on-surface-variant)', textAlign: 'center' }}>
            {resultFeature}
          </Typography>
          <CharacterAnimation score={score} />
          <Box sx={{mt:3,ml:2}}>
          <FormControlLabel
            control={<Checkbox checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)} />}
            label={
              <Typography 
                variant="body2"
                sx={{
                  '& a': {
                    color: 'primary.main',
                  },
                }}
              >
                <a href="/attachart/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意する
                <span style={{ color: 'red', marginLeft: '4px' }}>*</span>
              </Typography>
            }
          />
                    <Typography variant="caption" display="block" color="text.secondary" sx={{ml:4,lineHeight:'16px',mb:1}}>
            送信されたデータは、個人が特定されない形でサービスの改善に活用させていただきます。
          </Typography>
          </Box>
          <Button
            variant='contained'
            color='primary'
            disabled={!agreePrivacy}
            onClick={() => setShareModalOpen(true)}
            sizeType='large'
            fullWidth
          >
            SNSでシェアする
          </Button>
        </Box>
        <Box sx={{ my: 8 }}>
          <ResultForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </Box>
        <Box sx={{ my: 8 }}>
          <AboutSwept />
        </Box>
        <SnsShareModal open={shareModalOpen} onClose={() => setShareModalOpen(false)} onShare={handleShareSNS} />
        <Grid container spacing={4} sx={{ my: 8 }}>
          <Grid size={{xs:12, md:6}}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
              あなたへのおすすめ書籍
            </Typography>
            <ReferenceBookCard
              url={recommendedBook.url}
              title={recommendedBook.title}
            />
          </Grid>
          <Grid size={{xs:12, md:6}}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
              この診断の参考にさせて頂いた書籍
            </Typography>
            <ReferenceBookCard
              url={referenceBook.url}
              title={referenceBook.title}
            />
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleCloseFeedback}>
        <Alert onClose={handleCloseFeedback} severity={feedback.severity} sx={{ width: '100%' }}>
          {feedback.message}
        </Alert>
      </Snackbar>
    </>
  );
} 