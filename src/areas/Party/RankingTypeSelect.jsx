import {Box, FormControl, FormHelperText, InputLabel, Link, MenuItem, Select} from "@mui/material";

export default function RankingTypeSelect({rankingTypes, selectedRankingType, onRankingTypeSelected}) {
    return <Box sx={{marginTop: '1em'}}>
        <FormControl variant="filled" fullWidth>
            <InputLabel id="ranking-type-select-label">Ranking Type</InputLabel>
            <Select
                labelId="ranking-type-select-label"
                id="ranking-type-select"
                value={selectedRankingType?.id || ''}
                onChange={(e) => onRankingTypeSelected(e.target.value)}
            >
                {rankingTypes &&
                    Object.entries(rankingTypes).map(([rankingTypeId, rankingType]) => {
                        return <MenuItem key={rankingTypeId} value={rankingTypeId}>{rankingType.text}</MenuItem>
                    })
                }
            </Select>
            <FormHelperText>
                {selectedRankingType?.infoText}
                {selectedRankingType?.infoLink &&
                    <Link href={selectedRankingType.infoLink} target="_blank" rel="noopener noreferrer">{selectedRankingType.text}</Link>}
            </FormHelperText>
        </FormControl>
    </Box>
}