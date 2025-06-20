import { useState } from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Button from '@/components/atoms/Button';


// 将来的にAPIに渡すデータの型
export interface FormData {
  nickname: string;
  ageRange: string;
  gender: string;
  email: string;
  interviewAccepted: boolean;
}

interface ResultFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const ageRanges = ['10代以下', '20代', '30代', '40代', '50代', '60代以上'];
const genders = ['男性', '女性', 'その他', '回答しない'];

export const ResultForm = ({ onSubmit, isSubmitting }: ResultFormProps) => {
  const [nickname, setNickname] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [interviewAccepted, setInterviewAccepted] = useState(false);

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

  const isFormValid = ageRange !== '' && gender !== '' && email !== '' && !emailError && privacyPolicyAccepted;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      if(email === '') validateEmail(email);
      return;
    }
    
    onSubmit({
      nickname,
      ageRange,
      gender,
      email,
      interviewAccepted,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        診断結果をメールで受け取る
      </Typography>
      <TextField
        label="ニックネーム（任意）"
        fullWidth
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        margin="normal"
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="age-range-label">年齢</InputLabel>
        <Select
          labelId="age-range-label"
          id="age-range-select"
          value={ageRange}
          label="年齢"
          onChange={(e) => setAgeRange(e.target.value)}
        >
          {ageRanges.map((range) => (
            <MenuItem key={range} value={range}>{range}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="gender-label">性別</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          value={gender}
          label="性別"
          onChange={(e) => setGender(e.target.value)}
        >
          {genders.map((g) => (
            <MenuItem key={g} value={g}>{g}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="メールアドレス"
        type="email"
        fullWidth
        required
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        helperText={emailError ? '有効なメールアドレスを入力してください。' : ''}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={interviewAccepted}
            onChange={(e) => setInterviewAccepted(e.target.checked)}
          />
        }
        label="今後のサービス開発に関するインタビューにご協力いただけますか？（任意）"
      />
      <Box sx={{ my: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicyAccepted}
              onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
              required
            />
          }
          label={
            <Typography variant="body2">
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意する
            </Typography>
          }
        />
        <Typography variant="caption" display="block" color="text.secondary" sx={{ml:4}}>
          送信されたデータは、個人が特定されない形でサービスの改善に活用させていただきます。
        </Typography>
      </Box>
      <Button
        type="submit"
        variant="contained"
        sizeType='large'
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? '送信中...' : '結果をメールで受け取る'}
      </Button>
    </Box>
  );
}; 