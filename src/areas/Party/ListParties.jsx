import {db} from '../../data/firebase-service';
import {onValue, ref} from 'firebase/database';
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {getParties} from "../../data/api-service";
import PartyCard from "./PartyCard";

const partyRef = ref(db, `/parties`);

function ListParties(props) {
    const [apiParties, setApiParties] = useState([]);
    const [firebaseParties, setFirebaseParties] = useState({});

    useEffect(() => {
        return onValue(partyRef, (snapshot) => {
            const parties = snapshot.val();

            if (snapshot.exists()) {
                setFirebaseParties(parties)
            }
        })
    }, [])

    useEffect(() => {
        const localGetParties = async () => {
            const apiParties = await getParties(props.user.userId);

            setApiParties(apiParties || []);
        };

        localGetParties();
    }, [props.user])

    const output =
        (apiParties &&
            firebaseParties &&
            Object
                .entries(firebaseParties)
                .filter(([partyCode, _]) => apiParties.find(apiParty => apiParty.code === partyCode))
                .map(([_, party]) => {
                    return {
                        ...party,
                        owner: party.owner.name,
                        players: Object.entries(party.players || {}).map(([id, player]) => player)
                    }
                })) || [];

    return (
        <Box>
            {output.map(party => <PartyCard key={party.code} party={party}/>)}
        </Box>
    )
}

export default ListParties;