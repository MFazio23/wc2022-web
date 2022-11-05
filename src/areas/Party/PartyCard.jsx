import {Card, CardContent, CardHeader, List} from "@mui/material";
import {withStyles} from "@mui/styles";
import PartyCardRow from "./PartyCardRow";

const styles = theme => ({
    partyCard: {
        maxWidth: 400,
        margin: "16px 8px"
    }
})

function PartyCard({classes, party}) {
    return <Card className={classes.partyCard}>
        <CardHeader
            title={party.name}
            subheader={party.code}/>
        <CardContent>
            <List>
                {party.players && party.players.map(player => <PartyCardRow key={player.id} player={player}/>)}
            </List>
        </CardContent>
    </Card>
}

export default withStyles(styles)(PartyCard);