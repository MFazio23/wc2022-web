import {Card, CardContent, CardHeader} from "@mui/material";

export default function ScoringCard() {
    return (
        <Card className="wc-card">
            <CardHeader
                title="WC2022 Scoring"
                subheader="Players are awarded points for their teams' performance in the World Cup."/>
            <CardContent>
                <ul>
                    <li>Each win: 3 points</li>
                    <li>Each clean sheet (shutout): 2 points</li>
                    <li>Each draw (tie): 1 point</li>
                    <li>Each goal scored (up to five): 1 point</li>
                </ul>
            </CardContent>
        </Card>
    )

}