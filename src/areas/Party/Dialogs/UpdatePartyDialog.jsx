import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {updateParty} from "../../../data/api-service";

export default function UpdatePartyDialog({party, open, onClose, onDisplaySnackbar, onRefreshParties}) {
    const [newPartyName, setNewPartyName] = useState(party.name)
    const [isUpdating, setIsUpdating] = useState(false)

    const handlePartyNameChange = (e) => {
        const newName = e.target.value;

        setNewPartyName(newName)
    }

    const handleUpdateParty = async () => {
        setIsUpdating(true)

        if (newPartyName) {
            const updatePartyResult = await updateParty(party.code, newPartyName);

            if (updatePartyResult) {
                onRefreshParties();
                onClose();
                onDisplaySnackbar(
                    `Your party is now titled "${updatePartyResult.name}"`,
                )
            } else {
                onDisplaySnackbar("Error updating party. Please try again.")
            }
        }

        setIsUpdating(false)
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Update Party Name</DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant="body1">
                        Change your party's name below.
                    </Typography>
                    <TextField id="update-party-name" label="Party name" variant="filled" sx={{mt: 2}} fullWidth
                               value={newPartyName || ''} onChange={handlePartyNameChange}/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!newPartyName || isUpdating} onClick={handleUpdateParty}>Update Party</Button>
            </DialogActions>
        </Dialog>
    )
}