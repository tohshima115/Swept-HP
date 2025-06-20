import { useTheme, useMediaQuery } from '@mui/material';
import { useQuizAnswers } from '../hooks/useQuizAnswers';

const DOTS = [
  { start: 0, end: 15 },   // 1~15
  { start: 15, end: 30 },  // 16~30
  { start: 30, end: 45 },  // 31~45
];

export default function QuizProgressDots() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { answers } = useQuizAnswers();
  const size = isMobile ? 24 : 40;
  const stroke = 2;
  const radius = (size - stroke) / 2;

  // 各区間の進捗率を計算
  const progresses = DOTS.map(({ start, end }) => {
    const total = end - start;
    const answered = answers.slice(start, end).filter(a => a !== null).length;
    return total === 0 ? 0 : answered / total;
  });

  return (
    <div style={{ display: 'flex', gap: 8, marginRight:8 }}>
      {progresses.map((progress, i) => {
        const waveY = size / 2 + radius - (2 * radius * progress);
        const waveWidth = 4 * radius;
        const amplitude = 2;
        const startX = size / 2 - radius;

        const wavePath = `
          M ${startX - waveWidth} ${waveY}
          q ${waveWidth / 4} ${-amplitude}, ${waveWidth / 2} 0
          t ${waveWidth / 2} 0
          q ${waveWidth / 4} ${-amplitude}, ${waveWidth / 2} 0
          t ${waveWidth / 2} 0
          L ${startX + waveWidth}, ${size}
          L ${startX - waveWidth}, ${size}
          Z
        `;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            style={{ display: 'block' }}
          >
            {/* 枠線 */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={theme.palette.primaryTonal.main}
              strokeWidth={stroke}
              opacity={0.5}
            />
            {/* 水の進捗 */}
            {progress > 0 && (
              <defs>
                <linearGradient id={`color-gradient-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={theme.palette.primaryTonal.main} />
                  <stop offset="100%" stopColor={theme.palette.primary.main} />
                </linearGradient>
                <mask id={`wave-mask-${i}`}>
                  <path d={wavePath} fill="white">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0"
                      to={waveWidth}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </mask>
              </defs>
            )}
            {progress > 0 && (
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill={`url(#color-gradient-${i})`}
                mask={`url(#wave-mask-${i})`}
              />
            )}
          </svg>
        );
      })}
    </div>
  );
} 