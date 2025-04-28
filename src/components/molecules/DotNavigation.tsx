import { Stack, SxProps, Theme } from "@mui/material";
import DotIndicator from "../atoms/DotIndicator";

interface DotNavigationProps {
    count: number; // ドットの総数
    activeIndex: number; // アクティブなドットのインデックス
    onDotClick: (index: number) => void; // ドットクリック時のコールバック
    sx?: SxProps<Theme>;
}
const DotNavigation: React.FC<DotNavigationProps> = ({ count, activeIndex, onDotClick, sx }) => (
    <Stack direction="row" spacing={5} justifyContent="center" sx={sx}>
        {/* count の数だけ DotIndicator を生成 */}
        {Array.from({ length: count }).map((_, index) => (
            <DotIndicator
                key={index}
                isActive={index === activeIndex}
                onClick={() => onDotClick(index)} // クリックされたらそのインデックスをコールバック
            />
        ))}
    </Stack>
);

export default DotNavigation; 
