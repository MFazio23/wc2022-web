import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List} from '@mui/material';
import PlayerSummaryDialogRow from "./PlayerSummaryDialogRow";

export default function PlayerSummaryDialog({player, open, onClose}) {
    return (player &&
        <Dialog open={open} onClose={onClose} fullWidth={true}>
            <DialogTitle>{player.name}</DialogTitle>
            <DialogContent>
                <Box sx={{}}>
                    <List disablePadding>
                        {player.teams &&
                            player.teams.map(team => team && <PlayerSummaryDialogRow key={team.teamId} team={team}/>)
                        }
                    </List>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Remove from Party</Button>
                <Button onClick={onClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}