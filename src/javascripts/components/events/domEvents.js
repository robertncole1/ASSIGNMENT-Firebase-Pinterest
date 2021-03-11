import {
  createPin, deletePin, updatePin, getSinglePin
} from '../../helpers/data/pinData';
import { boardPinInfo, deleteBoardPins } from '../../helpers/data/boardPinData';
import boardInfo from '../boardInfo';
import showBoards from '../boards';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';
import showPins from '../pins';
import { createBoard } from '../../helpers/data/boardData';
import formModal from '../forms/formModal';
import editPinForm from '../forms/editPinForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardInfo(boardInfoObject.board);
      });
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      e.preventDefault();
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey, uid).then((pinArray) => showPins(pinArray));
      }
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#pin-title').value,
        imgUrl: document.querySelector('#pin-image').value,
        pinDescription: document.querySelector('#pin-description').value,
        boardId: document.querySelector('#board').value,
        uid
      };
      createPin(pinObject, uid).then((pinArray) => showPins(pinArray));
    }

    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        boardTitle: document.querySelector('#title').value,
        boardDescription: document.querySelector('#description').value,
        imgUrl: document.querySelector('#image').value,
        uid
      };
      createBoard(boardObject, uid).then((boardArray) => showBoards(boardArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#pin-title').value,
        imgUrl: document.querySelector('#pin-image').value,
        pinDescription: document.querySelector('#pin-description').value,
        boardId: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject).then((pinArray) => showPins(pinArray));
      $('#formModal').modal('toggle');
    }

    // DELETE A BOARD
    if (e.target.id.includes('delete-board')) {
      e.preventDefault();
      if (window.confirm('Want to delete? This will also delete all your Pins for this Board!')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardArray) => showBoards(boardArray));
      }
    }
  });
};

export default domEvents;
