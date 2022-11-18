import {Box, Card, CardContent, CardHeader, List} from "@mui/material";
import PartyCardRow from "./PartyCardRow";
import PartyCardMenu from "./PartyCardMenu";
import DistributeTeamsDialog from "./Dialogs/DistributeTeamsDialog";
import {useState} from "react";
import DeletePartyDialog from "./Dialogs/DeletePartyDialog";
import UpdatePartyDialog from "./Dialogs/UpdatePartyDialog";

function PartyCard({user, party, onPartyRowClicked, onDisplaySnackbar, onRefreshParties, onLeaveParty}) {
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isDraftDialogOpen, setDraftDialogOpen] = useState(false);
    const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);

    const handleDraftDialogClose = () => {
        setDraftDialogOpen(false)
    }

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false)
    }

    const handleUpdateDialogClose = () => {
        setUpdateDialogOpen(false)
    }

    const handlePartyRowClicked = (player) => {
        onPartyRowClicked(party, player)
    }

    const handleMenuItemClicked = (item) => {
        if (item === 'leave') {
            onLeaveParty(party)
        } else if (item === 'draft') {
            setDraftDialogOpen(true);
        } else if (item === 'delete') {
            setDeleteDialogOpen(true)
        } else if (item === 'update') {
            setUpdateDialogOpen(true)
        }
    }

    return <Box>
        <Card className="wc-card">
            <CardHeader
                title={party.name}
                subheader={`${party.code} - Owner: ${party.owner.name}`}
                action={<PartyCardMenu isPartyOwner={party.owner.id === user.uid}
                                       multipleTeams={party.players.length > 1}
                                       menuItemClicked={handleMenuItemClicked}/>}/>
            <CardContent>
                <List>
                    {party.players && party.players.map(player => {
                        return <PartyCardRow key={player.id} isUser={user.uid === player.id} player={player}
                                             onPartyRowClicked={() => handlePartyRowClicked(player)}/>
                    })}
                </List>
            </CardContent>
        </Card>
        <DistributeTeamsDialog party={party} open={isDraftDialogOpen} onClose={handleDraftDialogClose}
                               onDisplaySnackbar={onDisplaySnackbar}/>
        <DeletePartyDialog party={party} open={isDeleteDialogOpen} onClose={handleDeleteDialogClose}
                           onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>
        <UpdatePartyDialog party={party} open={isUpdateDialogOpen} onClose={handleUpdateDialogClose}
                           onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>
    </Box>
}

export default PartyCard;