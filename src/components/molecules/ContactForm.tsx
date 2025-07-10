import React, { ChangeEvent, useState } from 'react';
import { Box, Snackbar, Alert, SxProps, Theme } from '@mui/material';
import RadioGroupField from './RadioGroupField';
import TextFieldMolecule from './TextFieldMolecule';
import Button from '../atoms/Button';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  sx?: SxProps<Theme>;
}

const inquiryTypes = [
  'サービス内容・料金について',
  'アプリの操作・技術的な問題',
  '法人利用・協業・取材について',
  '採用について',
  'ご意見・ご要望',
  'その他',
];

const ContactForm = ({ sx }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState<'success' | 'error' | null>(null);

  // Formspree
  const [state, handleSubmit] = useForm("xovwgvpv");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.inquiryType !== '' &&
      formData.name !== '' &&
      formData.email !== '' &&
      formData.message !== ''
    );
  };

  // Formspree送信後の副作用
  React.useEffect(() => {
    if (state.succeeded) {
      setSnackbarStatus('success');
      setSnackbarOpen(true);
      setFormData({
        inquiryType: '',
        name: '',
        company: '',
        email: '',
        message: '',
      });
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setSnackbarStatus('error');
      setSnackbarOpen(true);
    }
  }, [state.succeeded, state.errors, state.submitting]);

  const handleSnackbarClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box component="form" onSubmit={e => {
      e.preventDefault();
      if (!isFormValid() || state.submitting) return;
      // Formspreeに送信
      const fakeEvent = {
        target: {
          elements: [
            { name: 'inquiryType', value: formData.inquiryType },
            { name: 'name', value: formData.name },
            { name: 'company', value: formData.company },
            { name: 'email', value: formData.email },
            { name: 'message', value: formData.message },
          ]
        },
        preventDefault: () => {},
      } as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(fakeEvent);
    }} sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
      <RadioGroupField
        label="お問い合わせ項目"
        name="inquiryType"
        value={formData.inquiryType}
        onChange={handleChange}
        options={inquiryTypes}
        required
      />
      <TextFieldMolecule
        label="会社名"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="例：株式会社山田"
      />
      <TextFieldMolecule
        label="お名前"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="例：山田 太郎"
        required
      />
      <TextFieldMolecule
        label="メールアドレス"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="例：example@swept.co.jp"
        required
      />
      <TextFieldMolecule
        label="お問い合わせ内容"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        placeholder="お問い合わせ内容をご記入ください"
        required
      />
      {/* Formspreeのバリデーションエラー表示（必要に応じて） */}
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button 
        variant="contained" 
        type="submit"
        disabled={!isFormValid() || state.submitting}
      >
        {state.submitting ? '送信中...' : '送信する'}
      </Button>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarStatus ?? 'info'} sx={{ width: '100%' }}>
          {snackbarStatus === 'success' && 'お問い合わせありがとうございます。送信されました。'}
          {snackbarStatus === 'error' && '送信に失敗しました。時間をおいて再度お試しください。'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm; 