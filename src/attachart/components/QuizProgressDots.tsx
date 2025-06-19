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
  const size = isMobile ? 40 : 56;
  const stroke = 2;
  const radius = (size - stroke) / 2;

  // 各区間の進捗率を計算
  const progresses = DOTS.map(({ start, end }) => {
    const total = end - start;
    const answered = answers.slice(start, end).filter(a => a !== null).length;
    return total === 0 ? 0 : answered / total;
  });

  return (
    <div style={{ display: 'flex', gap: isMobile ? 8 : 16 }}>
      {progresses.map((progress, i) => (
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
            fill="none"
            stroke={theme.palette.primaryTonal.main}
            strokeWidth={stroke}
            opacity={0.5}
          />
          {/* 水の進捗 */}
          <defs>
            <linearGradient id={`water-gradient-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={theme.palette.primaryTonal.main} stopOpacity={0.7} />
              <stop offset="100%" stopColor={theme.palette.primaryTonal.main} />
            </linearGradient>
            <mask id={`wave-mask-${i}`}>
              <rect x="0" y="0" width={size} height={size} fill="white" />
              <path
                d={`
                  M ${size/2 - radius} ${size}
                  Q ${size/2} ${size - 4} ${size/2 + radius} ${size}
                  L ${size/2 + radius} ${size/2 + radius - 2 * radius * progress}
                  Q ${size/2} ${size/2 + radius - 2 * radius * progress - 4} ${size/2 - radius} ${size/2 + radius - 2 * radius * progress}
                  Z
                `}
                fill="black"
                style={{
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <animate
                  attributeName="d"
                  dur="2s"
                  repeatCount="indefinite"
                  values={`
                    M ${size/2 - radius} ${size}
                    Q ${size/2} ${size - 4} ${size/2 + radius} ${size}
                    L ${size/2 + radius} ${size/2 + radius - 2 * radius * progress}
                    Q ${size/2} ${size/2 + radius - 2 * radius * progress - 4} ${size/2 - radius} ${size/2 + radius - 2 * radius * progress}
                    Z;
                    M ${size/2 - radius} ${size}
                    Q ${size/2} ${size - 2} ${size/2 + radius} ${size}
                    L ${size/2 + radius} ${size/2 + radius - 2 * radius * progress}
                    Q ${size/2} ${size/2 + radius - 2 * radius * progress - 2} ${size/2 - radius} ${size/2 + radius - 2 * radius * progress}
                    Z;
                    M ${size/2 - radius} ${size}
                    Q ${size/2} ${size - 4} ${size/2 + radius} ${size}
                    L ${size/2 + radius} ${size/2 + radius - 2 * radius * progress}
                    Q ${size/2} ${size/2 + radius - 2 * radius * progress - 4} ${size/2 - radius} ${size/2 + radius - 2 * radius * progress}
                    Z
                  `}
                />
              </path>
            </mask>
          </defs>
          {progress > 0 && (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill={`url(#water-gradient-${i})`}
              mask={`url(#wave-mask-${i})`}
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          )}
        </svg>
      ))}
    </div>
  );
} 