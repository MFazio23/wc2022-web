import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import React, {useState} from "react";
import {deleteParty} from "../../../data/api-service";
import GA from "../../../data/google-analytics";

export default function DeletePartyDialog({party, open, onClose, onDisplaySnackbar, onRefreshParties}) {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDeleteParty = async () => {
        setIsDeleting(true)
        const success = await deleteParty(party.code);

        GA.trackDeleteParty(party.code, success)

        if (success) {
            await onRefreshParties();
            onClose();
            onDisplaySnackbar("Party successfully deleted.")
        } else {
            onDisplaySnackbar("There was an error deleting the party. Please try again.")
        }
        setIsDeleting(false)
    }

    return (party &&
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <Box sx={{}}>
                    <Typography variant="body1">
                        Do you want to delete the <i>{party.name}</i> party?<br/>
                        This is annoying to undo, so please only click "Delete" if you <i>really</i> mean it.<br/>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" disabled={isDeleting} onClick={() => handleDeleteParty(party)}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}