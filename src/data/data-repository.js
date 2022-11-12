import {db} from './firebase-service';
import {onValue, ref} from 'firebase/database';

const partyRef = ref(db, '/parties');

const listenForParties = onUpdate => onValue(partyRef, (snapshot) => {
    const parties = snapshot.val()

    if (snapshot.exists()) {
        console.log("Parties", parties);
        onUpdate(parties)
    }
});

export {
    listenForParties
}