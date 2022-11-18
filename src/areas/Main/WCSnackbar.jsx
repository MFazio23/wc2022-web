import {Box, Button, IconButton, Snackbar} from "@mui/material";
import {Close} from "@mui/icons-material";

export default function WCSnackbar({open, onClose, snackbarConfig}) {
    const action = (
        <Box>
            {snackbarConfig.action &&
                <Button color="secondary" size="small" onClick={() => snackbarConfig.action()}>
                    {snackbarConfig.actionText}
                </Button>
            }
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={onClose}
            >
                <Close fontSize="small"/>
            </IconButton>
        </Box>
    )
    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={open}
            onClose={onClose}
            action={action}
            autoHideDuration={5000}
            message={snackbarConfig.message}/>
    )
}