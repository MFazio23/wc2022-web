import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import RankingTypeSelect from "../RankingTypeSelect";
import TeamsPerUserSelect from "../TeamsPerUserSelect";
import {TeamList} from "../../../data/teams";
import {distributeTeams} from "../../../data/api-service";
import GA from "../../../data/google-analytics";

const rankingTypes = {
    fifa: {
        text: "FIFA rankings",
        infoText: "Use the current ",
        infoLink: "https://www.fifa.com/fifa-world-ranking/men"
    },
    elo: {
        text: "ELO rankings",
        infoText: "Use the current ",
        infoLink: "https://eloratings.net/2022_World_Cup"
    },
    random: {
        text: "Random",
        infoText: "Randomly distribute all teams"
    }
}

export default function DistributeTeamsDialog({party, open, onClose, onDisplaySnackbar}) {
    const possibleTeamsPerUser = party?.players ? Math.floor(TeamList.length / party.players.length) : 0;

    const [selectedRankingType, setSelectedRankingType] = useState({id: 'fifa', ...rankingTypes.fifa});
    const [selectedTeamsPerUser, setSelectedTeamsPerUser] = useState(possibleTeamsPerUser);
    const [isDistributingTeams, setIsDistributingTeams] = useState(false);

    const handleRankingTypeSelected = (rankingTypeId) => {
        setSelectedRankingType(
            {
                id: rankingTypeId,
                ...rankingTypes[rankingTypeId]
            }
        );
    }
    const handleTeamsPerUserSelected = (teamsPerUser) => {
        setSelectedTeamsPerUser(teamsPerUser);
    }

    const handleDistributeTeams = async () => {
        setIsDistributingTeams(true)

        const distributeResult = await distributeTeams(
            party.code,
            selectedRankingType.id,
            selectedTeamsPerUser,
        )

        GA.trackDistributeTeams(selectedRankingType.id, selectedTeamsPerUser, distributeResult != null)

        setIsDistributingTeams(false)

        if (distributeResult != null) {
            onDisplaySnackbar("Teams distributed successfully!")
            onClose();
        } else {
            onDisplaySnackbar("There was an error distributing teams")
        }
    }

    const isButtonDisabled = !selectedRankingType || !selectedTeamsPerUser || isDistributingTeams;

    return (party &&
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Distribute teams for <i>{party.name}</i></DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant="body1">
                        Teams will be randomly distributed based on the selected ranking.<br/>
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item md={6} sm={12} xs={12}>
                            <RankingTypeSelect rankingTypes={rankingTypes}
                                               selectedRankingType={selectedRankingType}
                                               onRankingTypeSelected={handleRankingTypeSelected}/>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <TeamsPerUserSelect possibleTeamsPerUser={possibleTeamsPerUser}
                                                selectedTeamsPerUser={selectedTeamsPerUser}
                                                onTeamsPerUserSelected={handleTeamsPerUserSelected}/>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button disabled={isButtonDisabled} onClick={handleDistributeTeams}>Distribute Teams</Button>
            </DialogActions>
        </Dialog>
    )
}