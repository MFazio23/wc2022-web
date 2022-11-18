import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FilledInput,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {Search} from "@mui/icons-material";
import {getPartyByCode, joinParty} from "../../../data/api-service";

const codeRegex = /^[A-Z]{0,6}$/i

export default function JoinPartyDialog({open, onClose, onDisplaySnackbar, onRefreshParties}) {
    const [isJoining, setIsJoining] = useState(false)
    const [searchPartyCode, setSearchPartyCode] = useState(null)
    const [foundParty, setFoundParty] = useState(null)
    const [searchPartyCodeError, setSearchPartyCodeError] = useState(null)

    const clearDialog = () => {
        setSearchPartyCode(null)
        setFoundParty(null)
        setSearchPartyCodeError(null)
    }

    const handleClose = () => {
        clearDialog()
        onClose()
    }

    const handleUpdateSearchPartyCode = (event) => {
        const newCode = event.target.value.toUpperCase();

        if ((newCode.length <= 6 && codeRegex.test(newCode))) {
            setSearchPartyCode(newCode);
            if (newCode.length === 6) {
                setSearchPartyCodeError(null);
            }
        }
    }

    const handleKeyUp = async (e) => {
        if (e.key === 'Enter') {
            await searchForParty()
        }
    }

    const searchForParty = async () => {
        if (searchPartyCode && searchPartyCode.length === 6 && codeRegex.test(searchPartyCode)) {
            const searchResult = await getPartyByCode(searchPartyCode)

            setFoundParty(
                searchResult || {name: <span>Party <i>{searchPartyCode}</i> not found</span>}
            )
        } else {
            setSearchPartyCodeError("Codes must be six letters long.")
        }
    }

    const handleJoinParty = async () => {
        setIsJoining(true)
        const joinedParty = await joinParty(foundParty.code);

        if (joinedParty) {
            onRefreshParties()
            onDisplaySnackbar(`Welcome to ${joinedParty.name}!`)
            onClose()
            clearDialog()
        } else {
            onDisplaySnackbar("An error occurred. Please try again.")
        }
        setIsJoining(true)
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Join a Party</DialogTitle>
            <DialogContent>
                <Box>
                    <Typography variant="body1">
                        Ask your friend for their party's six-letter code to join in the fun!<br/>
                        Enter the code in the box below to search for the party.
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{mt: 2}}>
                            <FormControl variant="filled">
                                <InputLabel htmlFor="search-party-code" error={!!searchPartyCodeError}>
                                    Party code
                                </InputLabel>
                                <FilledInput id="search-party-code" type="text" value={searchPartyCode || ""}
                                             onChange={handleUpdateSearchPartyCode} error={!!searchPartyCodeError}
                                             required={true} autoFocus={true} onKeyUp={handleKeyUp}
                                             endAdornment={
                                                 <InputAdornment position="end">
                                                     <IconButton onClick={searchForParty} edge="end" type="submit">
                                                         <Search/>
                                                     </IconButton>
                                                 </InputAdornment>
                                             }/>
                                <FormHelperText error id="search-party-code-error">
                                    {searchPartyCodeError || ""}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        {foundParty && <Grid item xs={12} sm={6} sx={{mt: 1}}>
                            {foundParty.name && <Typography variant="h6">{foundParty.name}</Typography>}
                            {foundParty.owner && <Typography variant="body1">Owner: {foundParty.owner}</Typography>}
                            {foundParty.players &&
                                <Typography variant="body1">Player Count: {foundParty.players.length}</Typography>
                            }
                        </Grid>}
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!(foundParty?.code) || isJoining} onClick={handleJoinParty}>Join Party</Button>
            </DialogActions>
        </Dialog>
    )

}