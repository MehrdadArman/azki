import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)(({ theme, variant }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '10px 40px',
    lineHeight: 1.5,
    backgroundColor: variant === 'outlined' ? 'transparent' : theme.palette.primary.main,
    color: variant === 'outlined' ? theme.palette.primary.main : '#fff',
    border: variant === 'outlined' ? `1.8px solid ${theme.palette.primary.main}` : `1.8px solid transparent`,
    borderRadius: 20,
    fontWeight: 'normal',
    fontFamily: [
        'IRANSans',
    ].join(','),
    '&:hover': {
        backgroundColor: variant === 'outlined' ? theme.palette.primary.main : 'transparent',
        boxShadow: 'none',
        border: variant === 'outlined' ? `1.8px solid transparent` : `1.8px solid ${theme.palette.primary.main}`,
        color: variant === 'outlined' ? '#fff' : theme.palette.primary.main,
    },
    '&:active': {
        backgroundColor: variant === 'outlined' ? theme.palette.primary.main : 'transparent',
        boxShadow: 'none',
        border: variant === 'outlined' ? `1.8px solid transparent` : `1.8px solid ${theme.palette.primary.main}`,
        color: variant === 'outlined' ? '#fff' : theme.palette.primary.main,
    },
    '&:focus': {
        backgroundColor: variant === 'outlined' ? theme.palette.primary.main : 'transparent',
        boxShadow: 'none',
        border: variant === 'outlined' ? `1.8px solid transparent` : `1.8px solid ${theme.palette.primary.main}`,
        color: variant === 'outlined' ? '#fff' : theme.palette.primary.main,
    },
    '&:disabled': {
        backgroundColor: '#ccc',
        border: `1.8px solid #ccc`,
    }
}));