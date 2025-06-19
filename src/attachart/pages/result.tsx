import { Box, Typography } from '@mui/material';
import { useQuizAnswers } from '../hooks/useQuizAnswers';
import { questions } from '../questions';
import { useMemo } from 'react';

export default function Result() {
  const { answers } = useQuizAnswers();

  // スコア集計ロジック
  const score = useMemo(() => {
    let A = 0, B = 0, C = 0;
    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (!ans) return;
      const choice = q.choices.find(c => c.label === ans);
      if (!choice) return;
      if (choice.score === 'A') A++;
      if (choice.score === 'B') B++;
      if (choice.score === 'C') C++;
    });
    return { A, B, C };
  }, [answers]);

  // 判定タイプと特徴の定義
  const attachmentTypes = useMemo(() => [
    { key: '安定型', label: '安定型', description: '愛着不安、愛着回避とも低く、もっとも安定したタイプ' },
    { key: '安定一不安型', label: '安定一不安型', description: '愛着不安の傾向がみられるが、全体には安定したタイプ' },
    { key: '安定一回避型', label: '安定一回避型', description: '愛着回避の傾向がみられるが、全体には安定したタイプ' },
    { key: '不安型', label: '不安型', description: '愛着不安が強く、対人関係に敏感なタイプ' },
    { key: '不安—安定型', label: '不安—安定型', description: '愛着不安が強いが、ある程度適応力があるタイプ' },
    { key: '回避型', label: '回避型', description: '愛着回避が強く、親密な関係になりにくいタイプ' },
    { key: '回避一安定型', label: '回避一安定型', description: '愛着回避が強いが、ある程度適応力があるタイプ' },
    { key: '恐れ一回避型', label: '恐れ一回避型', description: '愛着不安、愛着回避とも強く、傷つくことに敏感で、疑り深くなりやすいタイプ' },
  ], []);

  // 8タイプ判定ロジック
  const resultType = useMemo(() => {
    const { A, B, C } = score;
    // 1. どのスコアが最も高いか
    const max = Math.max(A, B, C);
    // 2. 判定
    if (A >= 10 && A - B >= 5 && A - C >= 5) return '安定型';
    if (A > B && B >= 5) return '安定一不安型';
    if (A > C && C >= 5) return '安定一回避型';
    if (B >= 10 && C >= 10 && B - A >= 5 && C - A >= 5) return '恐れ一回避型';
    if (B >= 10 && B - A >= 5 && B - C >= 5) return '不安型';
    if (C >= 10 && C - A >= 5 && C - B >= 5) return '回避型';
    if (B >= A && A >= 5) return '不安—安定型';
    if (C >= A && A >= 5) return '回避一安定型';
    // デフォルト: 最大値の型
    if (max === A) return '安定型';
    if (max === B) return '不安型';
    if (max === C) return '回避型';
    return '安定型';
  }, [score]);

  const resultFeature = useMemo(() => {
    const type = attachmentTypes.find(t => t.key === resultType);
    return type ? type.description : '';
  }, [attachmentTypes, resultType]);

  return (
    <Box
      component="main"
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        py: 8,
        mt: 8,
        px: 2,
        color: 'var(--color-on-surface)',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
        診断結果
      </Typography>
      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 4,
          boxShadow: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'var(--color-surface-variant)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          あなたの愛着スタイル
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Typography
            component="span"
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 'full',
              bgcolor: 'var(--color-primary-container)',
              color: 'var(--color-primary)',
              fontWeight: 'bold',
              fontSize: '0.875rem',
            }}
          >
            安定型 {score.A}
          </Typography>
          <Typography
            component="span"
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 'full',
              bgcolor: 'var(--chart-2)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.875rem',
            }}
          >
            不安型 {score.B}
          </Typography>
          <Typography
            component="span"
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 'full',
              bgcolor: 'var(--chart-3)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.875rem',
            }}
          >
            回避型 {score.C}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Typography>判定:</Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: '1.25rem',
              px: 2,
              py: 1,
              borderRadius: 'full',
              background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
              color: 'white',
              boxShadow: 2,
            }}
          >
            {resultType}
          </Typography>
        </Box>
        <Typography sx={{ mt: 2, color: 'var(--color-on-surface-variant)' }}>
          {resultFeature}
        </Typography>
      </Box>
    </Box>
  );
} 