import React from 'react';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import StyledFirebaseAuth from "./StyledFirebaseAuth";
import {uiConfig, auth} from "../../data/firebase-service";

export default function LoginDialog({open, onClose}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>WC2022 Account</DialogTitle>
            <DialogContent>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </DialogContent>
        </Dialog>
    )
}