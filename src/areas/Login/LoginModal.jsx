import React, {useState} from 'react';
import {Backdrop, Box, Modal, Fade, Button} from '@mui/material';
import { uiConfig, auth } from './FirebaseConfig';
import StyledFirebaseAuth from "./StyledFirebaseAuth";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({isSignedIn, setIsSignedIn}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}