import { useState } from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import Button from '@/components/atoms/Button';
import { OptionsButtonGroup } from '@/components/molecules/OptionsButtonGroup';


// 将来的にAPIに渡すデータの型
export interface FormData {
  nickname: string;
  ageRange: string;
  gender: string;
  email: string;
  interviewAccepted: boolean;
}

interface ResultFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
}

const ageRanges = ['10代以下', '20代', '30代', '40代', '50代', '60代以上'];
const genders = ['男性', '女性', 'その他', '無回答'];

const isDataEqual = (data1: FormData, data2: FormData | null): boolean => {
  if (!data2) return false;
  return (
    data1.nickname === data2.nickname &&
    data1.ageRange === data2.ageRange &&
    data1.gender === data2.gender &&
    data1.email === data2.email &&
    data1.interviewAccepted === data2.interviewAccepted
  );
};

export const ResultForm = ({ onSubmit, isSubmitting }: ResultFormProps) => {
  const [nickname, setNickname] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [interviewAccepted, setInterviewAccepted] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmittedData, setLastSubmittedData] = useState<FormData | null>(null);

  const [emailError, setEmailError] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError(true);
      return false;
    }
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(!isValid);
    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      validateEmail(e.target.value);
    }
  };
  
  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const currentFormData: FormData = { nickname, ageRange, gender, email, interviewAccepted };
  const isDataUnchanged = isDataEqual(currentFormData, lastSubmittedData);
  const isSubmissionLimitReached = submissionCount >= 4;

  const isFormValid = ageRange !== '' && gender !== '' && email !== '' && !emailError && privacyPolicyAccepted;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting || isDataUnchanged || isSubmissionLimitReached) {
      if(email === '') validateEmail(email);
      return;
    }
    
    try {
      await onSubmit(currentFormData);
      setLastSubmittedData(currentFormData);
      setSubmissionCount(prev => prev + 1);
    } catch (error) {
      // エラーハンドリングは親コンポーネントに任せる
      console.error('Submission failed in parent component:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} 
    sx={{ display:'flex', flexDirection:'column' }}>
      <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        診断結果をメールで受け取る
      </Typography>
      <Box sx={{            p: 2,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'var(--color-surface-variant)',
            position: 'relative',
            overflow: 'hidden',display:'flex', flexDirection:'column'}}>
      <TextField
        label="ニックネーム（任意）"
        fullWidth
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        margin="normal"
        slotProps={{ inputLabel: { shrink: true } }}
        placeholder="アタッチャート太郎"
      />
      <TextField
        label="メールアドレス"
        type="email"
        fullWidth
        required
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        autoComplete="email"
        error={emailError}
        helperText={emailError ? '有効なメールアドレスを入力してください。' : ''}
        margin="normal"
        slotProps={{ inputLabel: { shrink: true } }}
        placeholder="hello@example.com（必須）"
      />
      <Box sx={{ my: 1.5 }}>
        <Typography component="p" sx={{ fontWeight: 'bold', mb: 1 }}>
          年齢<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
        </Typography>
        <OptionsButtonGroup
          options={ageRanges}
          value={ageRange}
          onChange={setAgeRange}
          columns={{ xs: 3, md: 6 }}
        />
      </Box>
      <Box sx={{ my: 1.5 }}>
        <Typography component="p" sx={{ fontWeight: 'bold', mb: 1 }}>
          性別<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
        </Typography>
        <OptionsButtonGroup
          options={genders}
          value={gender}
          onChange={setGender}
          columns={4}
        />
      </Box>
      <Box sx={{ my: 1.5 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicyAccepted}
              onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
            />
          }
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
        <Typography variant="caption" display="block" color="text.secondary" sx={{ml:4}}>
          送信されたデータは、個人が特定されない形でサービスの改善に活用させていただきます。
        </Typography>
      </Box>
      <Box sx={{ mt: 1.5,mb:3 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={interviewAccepted}
            onChange={(e) => setInterviewAccepted(e.target.checked)}
          />
        }
        label="今後のインタビューにご協力いただけますか？（任意）"
      />
      </Box>
      <Button
        type="submit"
        variant="contained"
        sizeType='large'
        disabled={!isFormValid || isSubmitting || isDataUnchanged || isSubmissionLimitReached}
      >
        {isSubmitting ? '送信中...' : isSubmissionLimitReached ? '送信回数の上限に達しました' : isDataUnchanged ? 'メールが送信されました' : '結果をメールで受け取る'}
      </Button>
      </Box>
    </Box>
  );
}; 