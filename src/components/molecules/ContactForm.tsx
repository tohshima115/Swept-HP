import { Box, Snackbar, Alert, SxProps, Theme } from '@mui/material';
import RadioGroupField from './RadioGroupField';
import TextFieldMolecule from './TextFieldMolecule';
import Button from '../atoms/Button';
import { ChangeEvent, useState } from 'react';

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

const NEWT_FORM_ENDPOINT = import.meta.env.VITE_NEWT_FORM_ENDPOINT;

const ContactForm = ({ sx }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!NEWT_FORM_ENDPOINT) {
      console.error('Newt form endpoint is not configured in environment variables.');
      setSubmitStatus('error');
      setSnackbarOpen(true);
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append('inquiryType', formData.inquiryType);
    data.append('name', formData.name);
    data.append('company', formData.company);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch(NEWT_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          inquiryType: '',
          name: '',
          company: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Form submission error:', response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
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
      <Button 
        variant="contained" 
        type="submit"
        disabled={!isFormValid() || isSubmitting}
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </Button>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={submitStatus ?? 'info'} sx={{ width: '100%' }}>
          {submitStatus === 'success' && 'お問い合わせありがとうございます。送信されました。'}
          {submitStatus === 'error' && '送信に失敗しました。時間をおいて再度お試しください。'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm; 