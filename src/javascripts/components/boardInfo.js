import { getBoards } from '../helpers/data/boardData';
import showBoards from './boards';

const boardInfo = (user) => {
  document.querySelector('#title-area').innerHTML += `<h3>${user.boardTitle}'s Pins</h3><a href="#"><p id="go-back">Go Back to All Boards</p></a>`;

  document.querySelector('#go-back').addEventListener('click', () => {
    document.querySelector('#title-area').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    getBoards(user.uid).then((boards) => showBoards(boards));
  });
};

export default boardInfo;
