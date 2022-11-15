import {Box, Button, Card, CardContent, CardHeader, Typography} from "@mui/material";

function Overview({isSignedIn, onOpenLoginModal}) {
    return (
        <Box>
            <Card>
                <CardHeader
                    titleTypographyProps={{fontSize: 48}}
                    title="Welcome to WC2022!"
                    /*action={<IconButton><SettingsIcon /></IconButton>}*//>
                <CardContent>
                    {!isSignedIn &&
                        <Box sx={{ textAlign: "center" }}>
                            <Button size="large" color="primary" variant="contained"
                                    onClick={onOpenLoginModal}>Login</Button>
                        </Box>
                    }
                    <p>
                        WC2022 is a fantasy game for the FIFA World Cup Qatar 2022™.<br/>
                        Join one or more groups, get your teams, and compete against your friends!<br/>
                        You can create and join groups of anywhere from 2-32 people.<br/>
                        Log in above to get started!<br/>
                        <br/>
                    </p>
                    <Typography variant="h5" color="textPrimary">
                        Joining a Party
                    </Typography>
                    <ol>
                        <li>Log In above</li>
                        <li>Get your six-character party token from your friend</li>
                        <li>Click the "JOIN PARTY" button</li>
                        <li>Search for your friend's party</li>
                        <li>Click "JOIN"!</li>
                    </ol>
                    <Typography variant="h5">
                        Creating a Party
                    </Typography>
                    <ol>
                        <li>Log In above</li>
                        <li>Click the "CREATE PARTY" button</li>
                        <li>Give your party a name</li>
                        <li>Click "CREATE"</li>
                        <li>Send your party's six-character code to your friends!</li>
                    </ol>
                    <Typography variant="h5">
                        Scoring
                    </Typography>
                    <div>
                        Players are awarded points for their teams' performance in the World Cup.<br/>
                        <ul>
                            <li>Each win: 3 points</li>
                            <li>Each clean sheet (shutout): 2 points</li>
                            <li>Each draw (tie): 1 point</li>
                            <li>Each goal scored: 1 point</li>
                        </ul>
                    </div>
                    <Typography variant="h6">
                        Team Distribution
                    </Typography>
                    <p>
                        Teams are distributed in parties randomly, based on criteria set by the party owner.
                        Owners choose how many teams each player is assigned.
                    </p>
                    <Typography className="fine-print" color="textSecondary">
                        WC2022 is in no way officially associated with FIFA or the FIFA World Cup Qatar 2022™.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Overview;