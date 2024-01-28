import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import React from 'react';

export interface ICustomModalProps {
    isOpen: boolean

    styles?: React.CSSProperties

    onClose: (value: boolean) => void

    children: React.ReactNode
}




export default function CustomModal({ isOpen, onClose, styles, children }: ICustomModalProps) {
    const handleClose = () => {
        onClose(!isOpen)
    };

    const style = {
        position: 'absolute' as 'absolute',

        top: '50%',
        left: '50%',

        transform: 'translate(-50%, -50%)',

        outline: "none",

        p: 4,

        ...styles
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
}
