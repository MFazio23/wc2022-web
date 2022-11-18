import {Box, Button, Card, CardContent, CardHeader} from "@mui/material";
import {useState} from "react";
import JoinPartyDialog from "./Dialogs/JoinPartyDialog";
import CreatePartyDialog from "./Dialogs/CreatePartyDialog";

export default function NewPartyCard({onDisplaySnackbar, onRefreshParties}) {
    const [isJoinPartyDialogOpen, setJoinPartyDialogOpen] = useState(false);
    const [isCreatePartyDialogOpen, setCreatePartyDialogOpen] = useState(false);

    const handleJoinPartyDialogClose = () => {
        setJoinPartyDialogOpen(false)
    }
    const handleCreatePartyDialogClose = () => {
        setCreatePartyDialogOpen(false)
    }

    return <Box>
        <Card className="wc-card">
            <CardHeader
                title="Get a New Party"
                subheader="Join an existing party or create a new one."/>
            <CardContent>
                <Button size="large" variant="contained" sx={{marginRight: '1em'}}
                        onClick={() => setJoinPartyDialogOpen(true)}>Join Party</Button>
                <Button size="large" variant="contained"
                        onClick={() => setCreatePartyDialogOpen(true)}>Create Party</Button>
            </CardContent>
        </Card>
        <JoinPartyDialog open={isJoinPartyDialogOpen} onClose={handleJoinPartyDialogClose}
                         onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>
        <CreatePartyDialog open={isCreatePartyDialogOpen} onClose={handleCreatePartyDialogClose}
                         onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties} />
    </Box>
}