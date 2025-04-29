import { FormControl, RadioGroup, FormControlLabel, Radio, SxProps, Theme } from '@mui/material';
import { Heading3 } from '../atoms/typography';

interface RadioGroupFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options: string[];
    required?: boolean;
    sx?: SxProps<Theme>;
}

const RadioGroupField = ({ label, name, value, onChange, options, required, sx }: RadioGroupFieldProps) => {
    return (
        <FormControl component="fieldset" required={required} sx={{ mb: 2, ...sx }}>
            <Heading3 title={label} required={required}/>
            <RadioGroup
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio size="small" />}
                        label={option}
                        sx={{
                            '& .MuiFormControlLabel-label': { fontSize: '0.875rem' },
                            p: 2,
                            border: 'solid 2px',
                            borderColor: value === option ? 'primary.main' : 'divider',
                            borderRadius: '8px',
                            margin: '8px 0',
                            bgcolor: value === option ? 'primary.light' : 'transparent',
                            transition: 'all 0.2s ease-in-out',
                        }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioGroupField; 