import { Box, ButtonBase, SxProps, Theme } from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface DotIndicatorProps {
    isActive: boolean;
    onClick: () => void;
    sx?: SxProps<Theme>;
}
const DotIndicator: React.FC<DotIndicatorProps> = ({ isActive, onClick, sx }) => {
    const theme = useTheme();
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                width: '16px', // 外側の円のサイズ
                height: '16px',
                borderRadius: '50%',
                border: `2px solid ${isActive ? theme.palette.primary.main : theme.palette.divider}`, // アクティブならprimary, 非アクティブならdivider
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                ...sx,
            }}
        >
            {/* 内側の円 (アクティブ時のみ表示) */}
            {isActive && (
                <Box
                    sx={{
                        width: '8px', // 内側の円のサイズ
                        height: '8px',
                        borderRadius: '50%',
                        bgcolor: 'primary.main', // 内側の色
                    }}
                />
            )}
        </ButtonBase>
    );
};

export default DotIndicator; 