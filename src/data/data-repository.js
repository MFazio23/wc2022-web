import {db} from './firebase-service';
import {onValue, ref} from 'firebase/database';

const partyRef = ref(db, '/parties');
const pointsRef = ref(db, '/points');
const rankingsRef = ref(db, '/rankings');
const scheduleRef = ref(db, '/schedule');
const standingsRef = ref(db, '/standings');

const listenForParties = (onUpdate) => listenForEvent(onUpdate, partyRef);
const listenForPoints = (onUpdate) => listenForEvent(onUpdate, pointsRef);
const listenForRankings = (onUpdate) => listenForEvent(onUpdate, rankingsRef);
const listenForSchedule = (onUpdate) => listenForEvent(onUpdate, scheduleRef);
const listenForStandings = (onUpdate) => listenForEvent(onUpdate, standingsRef);

const listenForEvent = (onUpdate, ref) => onValue(ref, snapshot => {
    const result = snapshot.val();

    if (snapshot.exists()) {
        onUpdate(result);
    }
})

export {
    listenForParties,
    listenForPoints,
    listenForRankings,
    listenForSchedule,
    listenForStandings,
}