import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, Typography} from '@mui/material';
import PlayerSummaryDialogRow from "./PlayerSummaryDialogRow";

export default function PlayerSummaryDialog(
    {
        player,
        party,
        isPartyOwner,
        didSelectSelf,
        hideSpoilers,
        open,
        onClose,
        onLeaveParty
    }
) {
    return (player &&
        <Dialog open={open} onClose={onClose} fullWidth={true}>
            <DialogTitle>{player.name}</DialogTitle>
            <DialogContent>
                <Box sx={{}}>
                    <List disablePadding>
                        {player.teams &&
                            player.teams.map(team => team &&
                                <PlayerSummaryDialogRow key={team.teamId} team={team} hideSpoilers={hideSpoilers}/>)
                        }
                        {!player.teams?.length && <Typography variant="body1">No teams yet.</Typography>}
                    </List>
                </Box>
            </DialogContent>
            <DialogActions>
                {isPartyOwner && !didSelectSelf && <Button color="error" onClick={onClose}>Remove from Party</Button>}
                {!isPartyOwner && didSelectSelf &&
                    <Button color="error" onClick={() => onLeaveParty(party)}>Leave Party</Button>
                }
                <Button onClick={onClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}