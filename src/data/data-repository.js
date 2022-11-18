import {db} from './firebase-service';
import {onValue, ref} from 'firebase/database';

const partyRef = ref(db, '/parties');
const pointsRef = ref(db, '/points');

const listenForParties = onUpdate => onValue(partyRef, (snapshot) => {
    const parties = snapshot.val()

    if (snapshot.exists()) {
        onUpdate(parties);
    }
});

const listenForPoints = onUpdate => onValue(pointsRef, snapshot => {
    const points = snapshot.val()

    if (snapshot.exists()) {
        onUpdate(points);
    }
})

export {
    listenForParties,
    listenForPoints,
}