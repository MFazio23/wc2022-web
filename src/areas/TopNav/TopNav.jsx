import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import gradientBall from '../../img/wwc2023-gradient-ball.png'
import TopNavMenu from "./TopNavMenu";
import {Link} from "react-router-dom";

function TopNav(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="logo" className="logo-image-button"
                                disableRipple={true} component={Link} to="/">
                        <Box component="img" src={gradientBall} className="logo-image" alt="logo"/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" sx={{flex: 1}}>
                        WWC2023
                    </Typography>
                    <TopNavMenu user={props.user} handleAccountClick={props.handleAccountClick}/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav;
