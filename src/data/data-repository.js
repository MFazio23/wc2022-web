import {db} from './firebase-service';
import {onValue, ref} from 'firebase/database';

const partyRef = ref(db, '/parties');
const pointsRef = ref(db, '/points');
const rankingsRef = ref(db, '/rankings');

const listenForParties = (onUpdate) => listenForEvent(onUpdate, partyRef);
const listenForPoints = (onUpdate) => listenForEvent(onUpdate, pointsRef);
const listenForRankings = (onUpdate) => listenForEvent(onUpdate, rankingsRef);

const listenForEvent = (onUpdate, ref) => onValue(ref, snapshot => {
    const result = snapshot.val();

    if (snapshot.exists()) {
        onUpdate(result);
    }
})

export {
    listenForParties,
    listenForPoints,
    listenForRankings
}