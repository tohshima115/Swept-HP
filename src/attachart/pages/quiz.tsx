import { Box, Typography, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import Button from '../../components/atoms/Button';
import { questions, Choice } from '../questions';
import { useQuizAnswers } from '../hooks/useQuizAnswers';

const QUESTIONS_PER_PAGE = 15;
const CHOICE_HEIGHT = 80; // px, 選択肢の高さを統一

function getPageQuestions(page: number) {
  const start = (page - 1) * QUESTIONS_PER_PAGE;
  return questions.slice(start, start + QUESTIONS_PER_PAGE);
}

export default function Quiz() {
  const { page } = useParams<{ page: string }>();
  const pageNum = Number(page);
  const navigate = useNavigate();
  const pageQuestions = getPageQuestions(pageNum);
  const { answers, setAnswer } = useQuizAnswers();

  // 設問ごとのref
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // position順に並び替え
  function getSortedChoices(choices: Choice[]): Choice[] {
    const order = ['left', 'center', 'right'] as const;
    return order.map(pos => choices.find((c) => c.position === pos)).filter(Boolean) as Choice[];
  }

  // 選択時に未回答の中で一番小さい設問番号の2問前にスクロール
  const handleSelect = (idx: number, value: string) => {
    const globalIdx = (pageNum - 1) * QUESTIONS_PER_PAGE + idx;
    setAnswer(globalIdx, value);
    const newAnswers = [...answers];
    newAnswers[globalIdx] = value;
    const firstUnanswered = newAnswers.findIndex(a => a === null);
    // スクロール対象がこのページ内ならのみスクロール
    if (firstUnanswered >= (pageNum - 1) * QUESTIONS_PER_PAGE && firstUnanswered < pageNum * QUESTIONS_PER_PAGE) {
      const scrollIdx = Math.max(0, firstUnanswered - (pageNum - 1) * QUESTIONS_PER_PAGE - 2);
      const nextRef = questionRefs.current[scrollIdx];
      if (nextRef) {
        nextRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // 未回答で一番小さい設問番号
  const firstUnansweredIdx = answers.findIndex(a => a === null);

  // ページごとのanswersスライスを使う
  const pageAnswers = answers.slice((pageNum - 1) * QUESTIONS_PER_PAGE, pageNum * QUESTIONS_PER_PAGE);

  return (
    <Box
      component="main"
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        py: 8,
        pt: 10,
        px: 2,
        color: 'var(--color-on-surface)',
      }}
    >
      <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
        設問 {1 + (pageNum - 1) * QUESTIONS_PER_PAGE}〜{pageNum * QUESTIONS_PER_PAGE}
      </Typography>
      <Box component="form">
        {pageQuestions.map((q, idx) => {
          // カードの状態判定
          const isAnswered = pageAnswers[idx] !== null;
          const isFirstUnanswered = idx === firstUnansweredIdx;
          
          return (
            <Box
              key={q.id}
              ref={(el: HTMLDivElement | null) => { questionRefs.current[idx] = el; }}
              sx={{
                position: 'relative',
                borderRadius: 2,
                bgcolor: 'var(--color-surface)',
                border: '1px solid',
                borderColor: isAnswered ? 'var(--color-outline)' : 'var(--color-outline-variant)',
                opacity: isAnswered ? 0.38 : 1,
                my: isFirstUnanswered ? 0 : 3,
                '&::after': isFirstUnanswered ? {
                  content: '""',
                  position: 'absolute',
                  inset: -1,
                  m: '-5px',
                  borderRadius: '16px',
                  border: '3px solid var(--color-secondary)',
                  pointerEvents: 'none',
                  zIndex: 20,
                } : {},
              }}
            >
              <Box sx={{ p: 2 }}>
                <Typography sx={{ mb: 1, fontWeight: 500 }}>
                  {q.id}. {q.question}
                </Typography>
                <RadioGroup
                  value={pageAnswers[idx] ?? ''}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: 0,
                    maxWidth: '100%',
                    height: CHOICE_HEIGHT,
                  }}
                >
                  {getSortedChoices(q.choices).map((choice, cidx) => (
                    <Box
                      key={cidx}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        height: '100%',
                        justifyContent: 'flex-end',
                        minWidth: 0,
                        minHeight: CHOICE_HEIGHT,
                      }}
                    >
                      <FormControlLabel
                        value={choice.label}
                        control={<Radio />}
                        label={choice.label}
                        onChange={() => handleSelect(idx, choice.label)}
                        sx={{
                          m: 0,
                          flexDirection: 'column-reverse',
                          '.MuiFormControlLabel-label': {
                            fontSize: '0.875rem',
                            mt: 0.5,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </RadioGroup>
              </Box>
            </Box>
          );
        })}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="text"
            onClick={() => {
              if (pageNum === 1) {
                navigate('/attachart');
              } else {
                navigate(`/attachart/quiz/${pageNum - 1}`);
              }
            }}
          >
            戻る
          </Button>
          {pageNum < 3 ? (
            <Button
              onClick={() => navigate(`/attachart/quiz/${pageNum + 1}`)}
              disabled={pageAnswers.some(a => a === null)}
            >
              次へ
            </Button>
          ) : (
            <Button
              onClick={() => navigate('/attachart/result')}
              disabled={pageAnswers.some(a => a === null)}
            >
              診断結果へ
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
} 