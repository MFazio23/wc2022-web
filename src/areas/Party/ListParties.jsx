import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {getParties} from "../../data/api-service";
import PartyCard from "./PartyCard";
import {listenForParties} from "../../data/data-repository";
import PlayerSummaryDialog from "./PlayerSummaryDialog";
import {Teams} from "../../data/teams";

function ListParties(props) {
    const [apiParties, setApiParties] = useState([]);
    const [firebaseParties, setFirebaseParties] = useState({});
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [isPlayerDialogOpen, setPlayerDialogOpen] = useState(false);

    useEffect(() => {
        listenForParties(setFirebaseParties)
    }, [])

    useEffect(() => {
        const localGetParties = async () => {
            const apiParties = await getParties(props.user.userId);

            setApiParties(apiParties || []);
        };

        localGetParties();
    }, [props.user]);

    const handlePartyRowClicked = (player) => {
        setSelectedPlayer(player);
        setPlayerDialogOpen(true);
    }

    const handlePlayerDialogClose = () => {
        setPlayerDialogOpen(false);
        setSelectedPlayer(null);
    }

    const mapPlayers = (players) =>
        Object.entries(players || {}).map(([_, player]) => {
            //TODO: Sort by score.
            const teams = Object.entries(player?.teams || {})
                .map(([teamId, _]) => Teams[teamId]);

            return {
                ...player,
                teams: teams,
            }
        })

    const output =
        (apiParties &&
            firebaseParties &&
            Object
                .entries(firebaseParties)
                .filter(([partyCode, _]) => apiParties.find(apiParty => apiParty.code === partyCode))
                .map(([_, party]) => ({
                    ...party,
                    owner: party.owner.name,
                    players: mapPlayers(party.players)
                }))
        ) || [];

    console.log("output", output)

    return (
        <Box>
            {output.map(party => <PartyCard key={party.code} party={party} onPartyRowClicked={handlePartyRowClicked}/>)}
            <PlayerSummaryDialog player={selectedPlayer} open={isPlayerDialogOpen}
                                 onClose={handlePlayerDialogClose}/>
        </Box>
    )
}

export default ListParties;