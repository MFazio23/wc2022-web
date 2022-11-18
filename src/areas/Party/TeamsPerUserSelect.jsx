import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function TeamsPerUserSelect({possibleTeamsPerUser, selectedTeamsPerUser, onTeamsPerUserSelected}) {
    const possibleTeams = possibleTeamsPerUser ? Array(possibleTeamsPerUser).fill().map((_, i) => i + 1) : [];
    return <Box sx={{marginTop: '1em'}}>
        <FormControl variant="filled" fullWidth>
            <InputLabel id="teams-per-user-select-label">Teams per user</InputLabel>
            <Select
                labelId="teams-per-user-select-label"
                id="teams-per-user-select"
                value={selectedTeamsPerUser}
                onChange={(e) => onTeamsPerUserSelected(e.target.value)}
            >
                {possibleTeams.map(teamCount => <MenuItem key={teamCount} value={teamCount}>
                        {teamCount} {teamCount > 1 ? "teams" : "team"}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    </Box>
}