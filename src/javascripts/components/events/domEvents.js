import { boardPinInfo, deleteBoardPins } from '../../helpers/data/boardPinData';
import { deletePin } from '../../helpers/data/pinData';
import boardInfo from '../boardInfo';
import showBoards from '../boards';
import showPins from '../pins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardInfo(boardInfoObject.board);
      });
    }

    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
      }
    }

    // DELETE A BOARD
    if (e.target.id.includes('delete-board')) {
      e.preventDefault();
      if (window.confirm('Want to delete?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardArray) => showBoards(boardArray));
      }
    }
  });
};

export default domEvents;
