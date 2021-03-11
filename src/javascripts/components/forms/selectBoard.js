import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../../helpers/data/boardData';

const selectBoard = (boardObject = {}) => {
  let domString = `<label for="board">Select an Board</label>
    <select class="form-control" id="board" required>
    <option value="">Select an Board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === boardObject.boardId) {
        domString += `<option selected value="${board.firebaseKey}">${board.boardTitle}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.boardTitle}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
