import { Box, Typography } from '@mui/material';
import { useQuizAnswers } from '../hooks/useQuizAnswers';
import { questions } from '../questions';
import { useMemo } from 'react';
import { determineAttachmentStyle } from '../utils/determineAttachmentStyle';

const RadarChart = ({ score }: { score: { A: number; B: number; C: number } }) => {
  const size = 240; // Increase size to prevent clipping
  const center = size / 2;
  const maxScore = 15; // The baseline for 100%

  const getPointForRatio = (ratio: number) => {
    const pA = { x: center, y: center - (center * 0.8 * ratio) };
    const pB = { x: center + (center * 0.8 * Math.sqrt(3) / 2 * ratio), y: center + (center * 0.8 / 2 * ratio) };
    const pC = { x: center - (center * 0.8 * Math.sqrt(3) / 2 * ratio), y: center + (center * 0.8 / 2 * ratio) };
    return { pA, pB, pC };
  };
  
  const getPoint = (basePoint: {x: number, y: number}, currentScore: number) => {
    // Allow scores to go over 15, but cap visualization slightly to prevent extreme overflow
    const ratio = Math.min(currentScore / maxScore, 1.15);
    return {
      x: center + (basePoint.x - center) * ratio,
      y: center + (basePoint.y - center) * ratio,
    };
  };
  
  const pA_base = { x: center, y: center - (center * 0.8) };
  const pB_base = { x: center + (center * 0.8 * Math.sqrt(3) / 2), y: center + (center * 0.8 / 2) };
  const pC_base = { x: center - (center * 0.8 * Math.sqrt(3) / 2), y: center + (center * 0.8 / 2) };


  const userPA = getPoint(pA_base, score.A);
  const userPB = getPoint(pB_base, score.B);
  const userPC = getPoint(pC_base, score.C);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
        {/* 背景のガイドライン */}
        {[5, 10, 15].map(value => {
          const { pA, pB, pC } = getPointForRatio(value / maxScore);
          return (
            <polygon
              key={value}
              points={`${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y}`}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
          );
        })}
        
        {/* ユーザーのスコア */}
        <polygon
          points={`${userPA.x},${userPA.y} ${userPB.x},${userPB.y} ${userPC.x},${userPC.y}`}
          fill="rgba(228, 87, 124, 0.6)"
        />

        {/* スコアの頂点を強調 */}
        {[userPA, userPB, userPC].map((p, index) => (
          <circle key={index} cx={p.x} cy={p.y} r="4" fill="#e4577c" />
        ))}

        {/* 各頂点のラベル */}
        <text x={pA_base.x} y={pA_base.y - 15} textAnchor="middle" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">安定: {score.A}</text>
        <text x={pB_base.x + 15} y={pB_base.y + 10} textAnchor="start" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">不安: {score.B}</text>
        <text x={pC_base.x - 15} y={pC_base.y + 10} textAnchor="end" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">回避: {score.C}</text>
      </svg>
    </Box>
  );
};

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
    { key: '安定一不安一回避型', label: '安定一不安一回避型', description: '愛着不安と愛着回避の傾向がみられるが、全体には安定したタイプ' },
    { key: '不安型', label: '不安型', description: '愛着不安が強く、対人関係に敏感なタイプ' },
    { key: '不安—安定型', label: '不安—安定型', description: '愛着不安が強いが、ある程度適応力があるタイプ' },
    { key: '回避型', label: '回避型', description: '愛着回避が強く、親密な関係になりにくいタイプ' },
    { key: '回避一安定型', label: '回避一安定型', description: '愛着回避が強いが、ある程度適応力があるタイプ' },
    { key: '恐れ一回避型', label: '恐れ一回避型', description: '愛着不安、愛着回避とも強く、傷つくことに敏感で、疑り深くなりやすいタイプ' },
  ], []);

  // 8タイプ判定ロジック
  const resultType = useMemo(() => {
    const { A, B, C } = score;
    return determineAttachmentStyle(A, B, C);
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
        <RadarChart score={score} />
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
          あなたの愛着スタイル
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2, mb: 2 }}>
          <Typography
            component="span"
            color='primary.main'
            variant='h3'
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
      </Box>
    </Box>
  );
} 