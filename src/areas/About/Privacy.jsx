import {Card, CardContent, CardHeader, Link, Typography} from "@mui/material";

function Privacy() {
    return (
        <Card className="wc-card">
            <CardHeader title="WWC2023 Privacy Policy and Terms of Service"
                        titleTypographyProps={{fontSize: 48}}/>
            <CardContent>
                <Typography color="primary" variant="h5">Privacy</Typography>
                <pre className="pre-info">
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
                <pre className="pre-info">
                    WWC2023 is just for fun, <i>should</i> be free, and has no attached warranty.<br/><br/>
                    Again, this is in no way officially associated with FIFA or the FIFA Women's World Cup Australia & New Zealand 2023™.<br/><br/>

                    Soccer ball icon made by <Link href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</Link> from <Link href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link>
                </pre>
            </CardContent>
        </Card>
    );
}

export default Privacy;