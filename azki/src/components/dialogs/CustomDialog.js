import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


// components
import { CustomButton } from '../buttons/CustomButton'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CustomDialog = ({ open, setOpen, dialogTitle, content }) => {
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(false)}
                fullWidth
            >
                <DialogTitle className={'font-iran text-right'}>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {content()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <CustomButton variant='outlined' onClick={()=>setOpen(false)}>بستن</CustomButton>
                    <CustomButton variant='primary' onClick={()=>setOpen(false)}>باشه</CustomButton>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default CustomDialog
