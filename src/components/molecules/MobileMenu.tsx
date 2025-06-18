import { Box } from '@mui/material';
import Button from '../atoms/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ to: string; label: string; labelJa: string }>;
  onClose?: () => void;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 104, transition: { duration: 0.3, ease: 'easeOut' } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MobileMenu = ({ isOpen, items, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          sx={{
            position: 'fixed',
            right: 24,
            bottom: 104, // FabButtonの上に8px間隔
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 0.5, // 4px
          }}
        >
          {items.map((item) => (
            <Box
              key={item.to}
              component={motion.div}
              variants={itemVariants}
            >
              <Button
                to={item.to}
                component={Link}
                color="primaryTonal"
                variant="contained"
                sizeType="medium"
                onClick={onClose}
              >
                {item.labelJa || item.label}
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;