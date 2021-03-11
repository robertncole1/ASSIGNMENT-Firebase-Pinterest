import { getBoards } from '../../helpers/data/boardData';
import { getPins } from '../../helpers/data/pinData';
import showBoards from '../boards';
import showPins from '../pins';

const navigationEvents = (uid) => {
  // ALL BOARDS
  document.querySelector('#board-home').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getBoards(uid).then((boards) => showBoards(boards));
  });

  document.querySelector('#boards').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getBoards(uid).then((boards) => showBoards(boards));
  });

  document.querySelector('#pins').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getPins(uid).then((pins) => showPins(pins));
  });
};

export default navigationEvents;
