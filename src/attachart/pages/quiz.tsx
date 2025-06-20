import { Box, Typography, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import Button from '../../components/atoms/Button';
import { questions, Choice } from '../questions';
import { useQuizAnswers } from '../hooks/useQuizAnswers';

const QUESTIONS_PER_PAGE = 15;

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

    // 回答後の最新の回答リストを元に、次の未回答を探す
    const newAnswers = [...answers];
    newAnswers[globalIdx] = value;
    const firstUnanswered = newAnswers.findIndex(a => a === null);

    // 未回答の質問がこのページにある場合のみスクロール
    if (firstUnanswered !== -1 && firstUnanswered >= (pageNum - 1) * QUESTIONS_PER_PAGE && firstUnanswered < pageNum * QUESTIONS_PER_PAGE) {
      // ページ内でのインデックスに変換
      const scrollIdx = firstUnanswered % QUESTIONS_PER_PAGE;
      const nextRef = questionRefs.current[scrollIdx];
      if (nextRef) {
        // 画面の中央にスムーズにスクロール
        nextRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
          // グローバルインデックスを計算
          const globalIdx = (pageNum - 1) * QUESTIONS_PER_PAGE + idx;
          
          // カードの状態判定
          const isAnswered = answers[globalIdx] !== null;
          const isFirstUnanswered = globalIdx === firstUnansweredIdx;
          
          return (
            <Box
              key={q.id}
              ref={(el: HTMLDivElement | null) => { questionRefs.current[idx] = el; }}
              sx={(theme) => ({
                position: 'relative',
                borderRadius: 2,
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: isAnswered ? 'var(--color-outline)' : 'var(--color-outline-variant)',
                opacity: isAnswered ? 0.38 : 1,
                my: isFirstUnanswered ? 0 : 3,
                '&::after': isFirstUnanswered ? {
                  content: '""',
                  position: 'absolute',
                  inset: -1,
                  m: '-5px',
                  borderRadius: '13px',
                  border: `3px solid ${theme.palette.primary.main}`,
                  pointerEvents: 'none',
                  zIndex: 20,
                } : {},
              })}
            >
              <Box sx={{ p: 2 }}>
                <Typography variant='h6' color='text.primary'>
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
                    alignItems: 'flex-end',
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
                        height: 'auto',
                        justifyContent: 'flex-end',
                        minWidth: 0,
                        minHeight: 80,
                      }}
                    >
                      <FormControlLabel
                        value={choice.label}
                        control={
                          <Radio 
                            sx={{ 
                              '& .MuiSvgIcon-root': {
                                width: choice.position !== 'center' ? 33.6 : 24,
                                height: choice.position !== 'center' ? 33.6 : 24,
                                transition: 'width 0.2s, height 0.2s',
                              },
                            }} 
                          />
                        }
                        label={choice.label}
                        onChange={() => handleSelect(idx, choice.label)}
                        sx={{
                          m: 0,
                          flexDirection: 'column-reverse',
                          '.MuiFormControlLabel-label': {
                            fontSize: '0.875rem',
                            mt: 0.5,
                            textAlign: 'center',
                            lineHeight: 1.3,
                            whiteSpace: 'pre-wrap'
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