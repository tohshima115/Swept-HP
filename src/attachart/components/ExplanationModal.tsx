import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@/components/atoms/Button';

interface ExplanationModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.default',
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 4,
  boxShadow: 24,
  color: 'text.primary',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
};

const ExplanationModal = ({ open, onClose }: ExplanationModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="attachment-explanation-modal-title"
      aria-describedby="attachment-explanation-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={{ p: 4, pb: 2, position: 'relative' }}>
          <Typography id="attachment-explanation-modal-title" variant="h4" component="h2">
            愛着スタイルとは
          </Typography>
          <Box sx={{ position: 'absolute', top: '24px', right: '24px' }}>
            <Button
              aria-label="close"
              onClick={onClose}
              sizeType="small"
              startIcon={<CloseIcon />}
              color='primaryTonal'
            />
          </Box>
        </Box>
        <Box sx={{ overflowY: 'auto', px: 4, pb: 4 }}>
          <Typography id="attachment-explanation-modal-description" sx={{ mt: 2 }}>
            幼少期に、親などの特定の養育者との間で築かれる情緒的な絆のことです。この絆は、子どもの心の「安全基地」として機能し、その後の人間関係やストレスへの対処能力の土台となります。
          </Typography>
          <Typography sx={{ mt: 2 }}>
            この「安全基地」がどのように形成されたかによって、人との関わり方にいくつかのパターン（愛着スタイル）が生まれます。主なスタイルとして、人との関係に安定感を持つ「安定型」、他者に過度に気を遣い見捨てられることを恐れる「不安型」、人と親密になることを避ける「回避型」などがあります。
          </Typography>
          <Typography sx={{ mt: 2 }}>
            この診断は、ご自身の愛着スタイルの傾向を知り、より良い人間関係を築くためのヒントを得ることを目的としています。医学的な診断や治療を目的としたものではありません。
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ExplanationModal; 