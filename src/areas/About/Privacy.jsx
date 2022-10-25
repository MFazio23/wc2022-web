import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";

const styles = {
    info: {
        whiteSpace: 'pre-wrap'
    }
};

function Privacy({classes}) {
    return (
        <Card>
            <CardHeader title="WC2022 Privacy Policy and Terms of Service"/>
            <CardContent>
                <Typography color="primary" variant="h5">Privacy</Typography>
                <pre className={classes.info}>
                    Normally, this would some huge blob of legalese that nobody would read.<br/><br/>
                    Instead, as I'm a developer, this is going to be basic.<br/><br/>
                    The only personal info I get from the site your email address and name (when you log in with a third-party service.)<br/>
                    Your email address allows me to connect accounts across Google, Facebook, and Twitter into a single account.<br/>
                    Your name allows me to display it for the site/app and any groups.<br/><br/>
                    I <i>am</i> using Google Analytics to get metrics on the site.  If this makes you uncomfortable, feel free to block it.<br/>
                    I'm just looking for numbers and to see if anyone cares about this thing.<br/><br/>
                    Past that, I don't get any personal info nor do I want it.<br/>
                </pre>

                <br/>

                <Typography color="primary" variant="h5">Terms of Service</Typography>
                <pre className={classes.info}>
                    WC2022 is just for fun, <i>should</i> be free, and has no attached warranty.<br/><br/>
                    Again, this is in no way officially associated with FIFA or the FIFA World Cup Qatar 2022™.<br/><br/>
                    Soccer ball icon made by <a href="http://www.freepik.com/">Freepik</a> from <a href="http://www.flaticon.com/">www.flaticon.com</a>
                </pre>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Privacy);