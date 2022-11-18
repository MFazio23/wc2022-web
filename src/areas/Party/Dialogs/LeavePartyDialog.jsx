import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import React, {useState} from "react";
import {leaveParty} from "../../../data/api-service";

export default function LeavePartyDialog({user, party, open, onClose, onDisplaySnackbar, onRefreshParties}) {
    const [isLeaving, setIsLeaving] = useState(false)

    const handleLeaveParty = async () => {
        setIsLeaving(true)
        const success = await leaveParty(user.uid, party.code);

        if (success) {
            await onRefreshParties();
            onClose();
            onDisplaySnackbar(`You successfully left ${party.name}.`)
        } else {
            onDisplaySnackbar("There was an error leaving the party. Please try again.")
        }
        setIsLeaving(false)
    }

    return (party &&
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant="body1">
                        Do you want to leave the <i>{party.name}</i> party?<br/>
                        This is annoying to undo, so please only click "Leave Party" if you <i>really</i> mean it.<br/>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" disabled={isLeaving} onClick={handleLeaveParty}>Leave Party</Button>
            </DialogActions>
        </Dialog>
    )
}