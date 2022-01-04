

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';



export const CustomeTextField = styled(TextField)(({ theme }) => ({
    '& input:valid + fieldset': {
        borderWidth: 1.8,
        borderRadius: '4px',
        innerWidth: '100%'
    },
    '& input:invalid:focus + fieldset': {
        padding: '0px !important',
        border:`2px solid ${theme.palette.error.main}`
    },
    '& input:valid:focus + fieldset': {
        borderColor: '#D4D4D4',
        padding: '0px !important',
        borderWidth: 2,
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#D4D4D4',
        },
    },
    '& input': {
        textAlign: 'right',
        fontFamily: 'IRANSans !important',
        fontSize: '14px',
    },
}));