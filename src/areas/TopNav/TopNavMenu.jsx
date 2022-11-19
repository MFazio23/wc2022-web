import {Box, Menu, MenuItem, useTheme} from "@mui/material";
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
    const handleAccountClick = () => {
        handleClose(CloseSource.ProfileMenu);
        props.handleAccountClick(!props.user)
        /*GA.event({
            category: 'user',
            action: 'signOut'
        });*/
    }

    return (
        <Box>
            <ProfileIconButton text={props.user ? props.user.displayName : "Account"}
                               handleIconClick={handleIconClick}/>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {props.user && <MenuItem component={Link} to='/'
                                         onClick={() => handleClose(CloseSource.ProfileMenu)}>Parties</MenuItem>}
                <MenuItem component={Link} to='/overview'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Overview</MenuItem>
                {/*<MenuItem component={Link} to='/rankings'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Rankings</MenuItem>*/}
                <MenuItem component={Link} to='/privacy'
                          onClick={() => handleClose(CloseSource.ProfileMenu)}>Privacy/Terms</MenuItem>
                <MenuItem onClick={() => toggleUIMode()}>
                    {theme.palette.mode === 'light' ? "Dark mode" : "Light mode"}
                </MenuItem>
                <MenuItem onClick={handleAccountClick}>{props.user ? "Sign out" : "Sign in"}</MenuItem>
            </Menu>
        </Box>
    )
}

export default TopNavMenu;