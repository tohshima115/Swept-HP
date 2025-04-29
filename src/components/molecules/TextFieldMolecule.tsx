import { Box, TextField, SxProps, Theme } from '@mui/material';
import { ChangeEvent } from 'react';
import { Heading3 } from '../atoms/typography';

interface TextFieldMoleculeProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    multiline?: boolean;
    rows?: number;
    placeholder?: string;
    required?: boolean;
    sx?: SxProps<Theme>;
}

const TextFieldMolecule: React.FC<TextFieldMoleculeProps> = ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    multiline = false,
    rows = 1,
    placeholder,
    required = false,
    sx,
}) => {
    return (
        <Box>
            <Heading3 title={label} required={required}/>
            <TextField
                hiddenLabel
                fullWidth
                variant="filled"
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                multiline={multiline}
                rows={rows}
                placeholder={placeholder}
                required={required}
                sx={{
                    ...sx,
                }}
            />
        </Box>
    );
};

export default TextFieldMolecule; 