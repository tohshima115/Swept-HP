import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Button from '@/components/atoms/Button';
import { Box } from '@mui/material';

interface SnsShareModalProps {
  open: boolean;
  onClose: () => void;
  onShare: (platform: 'x' | 'facebook' | 'line') => void;
}

const SnsShareModal = ({ open, onClose, onShare }: SnsShareModalProps) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      シェアするSNSを選択
    </DialogTitle>
    <Stack direction="row" spacing={3} sx={{ p: 3, minWidth: 320, justifyContent: 'center' }}>
      <Button
        variant="outlined"
        startIcon={
          <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/X.svg" alt="X" style={{ width: 24, height: 24, objectFit: 'contain', display: 'block' }} />
          </Box>
        }
        onClick={() => onShare('x')}
      >
      </Button>
      <Button
        variant="outlined"
        startIcon={
          <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/Facebook.svg" alt="Facebook" style={{ width: 32, height: 32, objectFit: 'contain', display: 'block' }} />
          </Box>
        }
        onClick={() => onShare('facebook')}
      >
      </Button>
      <Button
        variant="outlined"
        startIcon={
          <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/LINE.svg" alt="LINE" style={{ width: 32, height: 32, objectFit: 'contain', display: 'block' }} />
          </Box>
        }
        onClick={() => onShare('line')}
      >
      </Button>
    </Stack>
  </Dialog>
);

export default SnsShareModal; 