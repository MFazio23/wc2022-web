import React from 'react';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {auth, uiConfig} from './FirebaseConfig';
import StyledFirebaseAuth from "./StyledFirebaseAuth";

export default function LoginModal(props) {
  return (
      <Dialog open={props.open}>
        <DialogTitle>WC2022 Account</DialogTitle>
        <DialogContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
        </DialogContent>
      </Dialog>
  )
}