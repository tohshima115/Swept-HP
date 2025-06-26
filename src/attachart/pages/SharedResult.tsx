import { useParams, Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '@/components/atoms/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import { determineAttachmentStyle, AttachmentStyle } from '../utils/determineAttachmentStyle';
import { RadarChart } from '../components/RadarChart';
import CharacterAnimation from '../components/CharacterAnimation';
import { attachmentTypes } from '../resultData';
import ExplanationModal from '../components/ExplanationModal';

// ローマ字→日本語タイプ変換
const typeMap: Record<string, AttachmentStyle> = {
  antei: '安定型',
  antei_fuan: '安定一不安型',
  antei_kaihi: '安定一回避型',
  antei_fuan_kaihi: '安定一不安一回避型',
  osore_kaihi: '恐れ一回避型',
  fuan: '不安型',
  kaihi: '回避型',
  fuan_antei: '不安—安定型',
  kaihi_antei: '回避一安定型',
};

export default function SharedResult() {
  const { type, scoreString } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [A = 0, B = 0, C = 0] = (scoreString?.split('-').map(Number) ?? []);
  const style = typeMap[type ?? ''] ?? '安定型';
  const detectedStyle = determineAttachmentStyle(A, B, C);
  const score = { A, B, C };
  const typeObj = attachmentTypes.find(t => t.key === style);
  const resultFeature = typeObj?.description || '';

  return (
    <>
      <ExplanationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Box
        component="main"
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          py: 4,
          color: 'var(--color-on-surface)',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          診断結果
        </Typography>
        <Box
          sx={{
            mb: 4,
            p: 2,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'var(--color-surface-variant)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <RadarChart score={score} />
          <Box sx={{display:'flex',width:'100%',justifyContent: 'center',alignItems:'center'}}>
            <Typography variant="h4" sx={{ textAlign: 'center',mr:1,ml:6 }}>
                愛着スタイル
            </Typography>
            <Button
            color='primaryTonal'
            onClick={() => setIsModalOpen(true)}
            startIcon={<HelpOutlineIcon />}
            sizeType='small'
            variant='text'
            >
            </Button>
            </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2, mb: 2 }}>
            <Typography
              component="span"
              color='primary.main'
              variant='h2'
              sx={{
                px: 2,
                py: 1,
                borderRadius: 'full',
              }}
            >
              {style}
            </Typography>
          </Box>
          <Typography sx={{ mt: 2, color: 'var(--color-on-surface-variant)', textAlign: 'center' }}>
            {resultFeature}
          </Typography>
          <CharacterAnimation score={score} />
          {/* スコアや注意書き、診断ボタンなどはこの下に追加 */}
          {style !== detectedStyle && (
            <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
              ※スコアとタイプが一致しません（URLのタイプ: {style} / 計算結果: {detectedStyle}）
            </Typography>
          )}
        </Box>
          <Button component={Link} fullWidth sizeType='large' to="/attachart" variant="contained" color="primary">
            自分も診断する
          </Button>
      </Box>
    </>
  );
} 