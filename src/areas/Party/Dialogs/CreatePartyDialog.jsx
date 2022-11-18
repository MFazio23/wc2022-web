import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {createParty} from "../../../data/api-service";

export default function CreatePartyDialog({open, onClose, onDisplaySnackbar, onRefreshParties}) {
    const [partyName, setPartyName] = useState(null)
    const [isCreating, setIsCreating] = useState(false)

    const handlePartyNameChange = (e) => {
        const newName = e.target.value;

        setPartyName(newName)
    }

    const handleCreateParty = async () => {
        setIsCreating(true)

        if (partyName) {
            const createPartyResult = await createParty(partyName);

            if (createPartyResult) {
                onRefreshParties();
                onClose();
                onDisplaySnackbar(
                    `Party created! Use code ${createPartyResult.code} to invite your friends.`,
                    `Copy Code`,
                    () => {
                        navigator.clipboard.writeText(createPartyResult.code);
                    }
                )
            } else {
                onDisplaySnackbar("Error creating party. Please try again.")
            }
        }

        setIsCreating(false)
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Create a Party</DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant="body1">
                        Create your new party here!<br/>
                        Invite your friends with the six-character code generated after party creation.
                    </Typography>
                    <TextField id="create-party-name" label="Party name" variant="filled" sx={{mt: 2}} fullWidth
                               value={partyName || ''} onChange={handlePartyNameChange}/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!partyName || isCreating} onClick={handleCreateParty}>Create Party</Button>
            </DialogActions>
        </Dialog>
    )
}