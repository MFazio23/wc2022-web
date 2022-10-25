import {withStyles} from "@mui/styles";
import {Box, Button, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";

const styles = theme => ({
    text: {
        color: 'white',
        fontSize: '0.75em'
    },
    button: {
        flexDirection: 'column',
        padding: 0
    },
})

function ProfileIconButton({classes, text, handleIconClick}) {
    return <Box>
        <Button classes={{root: classes.button}} color="primary" variant="raised" disableRipple={true} onClick={handleIconClick}>
            <Person color="white" />
            <Typography variant="body2" className={classes.text}>{text}</Typography>
        </Button>
    </Box>
}

export default withStyles(styles)(ProfileIconButton)

/*
const styles = theme => ({
  button: {
    height: 95, // setting height/width is optional
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: 'column'
  },
  icon: {
    fontSize: '32px !important',
    marginBottom: theme.spacing.unit
  }
})

const CustomButton = ({ classes }) => (
  <Button
classes={{ root: classes.button, label: classes.label }}
variant="raised"
color="primary"
disableRipple={true}
    >
    <Settings className={classes.icon} />
Message
</Button>
)
 */