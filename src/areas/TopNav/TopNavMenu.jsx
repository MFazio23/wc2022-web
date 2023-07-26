import {Box, Menu, MenuItem, useTheme} from "@mui/material";
import {useContext, useState} from "react";
import ColorModeContext from "../Theming/ColorModeContext";
import ProfileIconButton from "./ProfileIconButton";
import {Link} from "react-router-dom";

const CloseSource = {
    Login: "login",
    ProfileMenu: "profileMenu"
}

function TopNavMenu({user, hideSpoilers, handleToggleSpoilers, handleAccountClick}) {
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
    const toggleSpoilers = () => {
        handleToggleSpoilers();
    }
    const toggleUIMode = () => {
        colorModeContext.toggleColorMode()
    }
    const onAccountClick = () => {
        handleClose(CloseSource.ProfileMenu);
        handleAccountClick(!user)
        /*GA.event({
            category: 'user',
            action: 'signOut'
        });*/
    }

    return (
        <Box>
            <ProfileIconButton text={user ? user.displayName : "Account"}
                               handleIconClick={handleIconClick}/>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {user && <MenuItem component={Link} to='/'
                                         onClick={() => handleClose(CloseSource.ProfileMenu)}>Parties</MenuItem>}
                <MenuItem component={Link} to='/overview'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Overview</MenuItem>
                <MenuItem component={Link} to='/schedule'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Schedule</MenuItem>
                <MenuItem component={Link} to='/rankings'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Rankings</MenuItem>
                <MenuItem component={Link} to='/privacy'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Privacy/Terms</MenuItem>
                <MenuItem onClick={() => toggleUIMode()}>
                    {theme.palette.mode === 'light' ? "Dark mode" : "Light mode"}
                </MenuItem>
                <MenuItem onClick={() => toggleSpoilers()}>
                    {hideSpoilers ? "Show spoilers" : "Hide spoilers"}
                </MenuItem>
                <MenuItem onClick={onAccountClick}>{user ? "Sign out" : "Sign in"}</MenuItem>
            </Menu>
        </Box>
    )
}

export default TopNavMenu;