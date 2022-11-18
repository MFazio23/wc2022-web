import {Box, IconButton, Menu, MenuItem} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import {useState} from "react";

function PartyCardMenu({isPartyOwner, multipleTeams, menuItemClicked}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const moreSettingsClicked = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleMenuItemClicked = (item) => {
        menuItemClicked(item);
        handleClose()
    }

    return (
        <Box>
            <IconButton aria-label="settings" onClick={moreSettingsClicked}>
                <MoreVert/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {!isPartyOwner && <MenuItem onClick={() => handleMenuItemClicked('leave')}>Leave Party</MenuItem>}
                {isPartyOwner && multipleTeams &&
                    <MenuItem onClick={() => handleMenuItemClicked('draft')}>Distribute Teams</MenuItem>
                }
                {isPartyOwner && <MenuItem onClick={() => handleMenuItemClicked('update')}>Update Party Name</MenuItem>}
                {isPartyOwner && <MenuItem onClick={() => handleMenuItemClicked('delete')}>Delete Party</MenuItem>}
            </Menu>
        </Box>
    )
}

export default PartyCardMenu;