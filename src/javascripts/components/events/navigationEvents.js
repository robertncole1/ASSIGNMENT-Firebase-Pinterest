import { getBoards } from '../../helpers/data/boardData';
import showBoards from '../boards';

const navigationEvents = (uid) => {
  // ALL BOARDS
  document.querySelector('#board-home').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    getBoards(uid).then((boards) => showBoards(boards));
  });

  document.querySelector('#boards').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    getBoards(uid).then((boards) => showBoards(boards));
  });
};

export default navigationEvents;
