import {Person} from "@mui/icons-material";
import {Box, IconButton, Menu, MenuItem, Stack, Typography, useTheme} from "@mui/material";
import {useContext, useState} from "react";
import ColorModeContext from "../Theming/ColorModeContext";
import ProfileIconButton from "./ProfileIconButton";
import {Link} from "react-router-dom";

const CloseSource = {
    Login: "login",
    ProfileMenu: "profileMenu"
}

function TopNavMenu(props) {
    const theme = useTheme()
    const colorModeContext = useContext(ColorModeContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = (source) => {
        setAnchorEl(null);
    }
    const toggleUIMode = () => {
        colorModeContext.toggleColorMode()
    }
    const signOut = () => {

        //firebase.auth().signOut();
        props.onSignOut();
        handleClose(CloseSource.ProfileMenu);
        /*GA.event({
            category: 'user',
            action: 'signOut'
        });*/
    }

    return (
        <Box>
            <ProfileIconButton text={"Account"} handleIconClick={handleIconClick}/>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem component={Link} to='/overview'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Overview</MenuItem>
                <MenuItem component={Link} to='/rankings'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Rankings</MenuItem>
                <MenuItem component={Link} to='/privacy'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Privacy/Terms</MenuItem>
                <MenuItem onClick={() => toggleUIMode()}>
                    {theme.palette.mode === 'light' ? "Dark mode" : "Light mode"}
                </MenuItem>
                <MenuItem onClick={signOut}>Sign out</MenuItem>
            </Menu>
        </Box>
    )
}

export default TopNavMenu;