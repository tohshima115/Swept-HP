import { Box, Typography, Snackbar, Alert } from '@mui/material';
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

  return (
    <>
      <ExplanationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Box
        component="main"
        sx={{
         maxWidth:'800px',
          mx: 'auto',
          py: 4,
          px: 2,
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
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
            あなたの愛着スタイル
          </Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
            color='primaryTonal'
            onClick={() => setIsModalOpen(true)}
            startIcon={<HelpOutlineIcon />}
            sizeType='small'
            >
                愛着スタイルとは
            </Button>
          </Box>
        </Box>
        <Box sx={{ my: 8 }}>
          <ResultForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </Box>
        <Box sx={{ my: 8 }}>
          <AboutSwept />
        </Box>
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
            あなたへのおすすめ書籍
          </Typography>
          <ReferenceBookCard
            url={recommendedBook.url}
            title={recommendedBook.title}
          />
        </Box>
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
            この診断の参考にさせて頂いた書籍
          </Typography>
          <ReferenceBookCard
            url={referenceBook.url}
            title={referenceBook.title}
          />
        </Box>
      </Box>
      <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleCloseFeedback}>
        <Alert onClose={handleCloseFeedback} severity={feedback.severity} sx={{ width: '100%' }}>
          {feedback.message}
        </Alert>
      </Snackbar>
    </>
  );
} 