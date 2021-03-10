// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET ALL BOARD PINS
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE PIN
const deletePin = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getBoardPins(uid).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

export { getBoardPins, getPins, deletePin };
