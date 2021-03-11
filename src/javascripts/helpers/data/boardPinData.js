import { deleteBoard, getSingleBoard } from './boardData';
import { getBoardPins, deletePin } from './pinData';

const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinResponse]) => {
      resolve({ board: boardResponse, pins: boardPinResponse });
    })
    .catch((error) => reject(error));
});

const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

export { boardPinInfo, deleteBoardPins };
