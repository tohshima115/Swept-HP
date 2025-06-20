import { Box } from '@mui/material';

interface RadarChartProps {
  score: {
    A: number;
    B: number;
    C: number;
  };
}

export const RadarChart = ({ score }: RadarChartProps) => {
  const size = 240;
  const center = size / 2;
  const maxScore = 15;

  const getPointForRatio = (ratio: number) => {
    const pA = { x: center, y: center - (center * 0.8 * ratio) };
    const pB = { x: center + (center * 0.8 * Math.sqrt(3) / 2 * ratio), y: center + (center * 0.8 / 2 * ratio) };
    const pC = { x: center - (center * 0.8 * Math.sqrt(3) / 2 * ratio), y: center + (center * 0.8 / 2 * ratio) };
    return { pA, pB, pC };
  };
  
  const getPoint = (basePoint: {x: number, y: number}, currentScore: number) => {
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
        <polygon
          points={`${userPA.x},${userPA.y} ${userPB.x},${userPB.y} ${userPC.x},${userPC.y}`}
          fill="rgba(228, 87, 124, 0.6)"
        />
        {[userPA, userPB, userPC].map((p, index) => (
          <circle key={index} cx={p.x} cy={p.y} r="4" fill="#e4577c" />
        ))}
        <text x={pA_base.x} y={pA_base.y - 15} textAnchor="middle" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">安定: {score.A}</text>
        <text x={pB_base.x + 15} y={pB_base.y + 10} textAnchor="start" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">不安: {score.B}</text>
        <text x={pC_base.x - 15} y={pC_base.y + 10} textAnchor="end" fontSize="16" fontWeight="bold" fill="var(--color-on-surface)">回避: {score.C}</text>
      </svg>
    </Box>
  );
}; 