import showBoards from './components/boards';
import domBuilder from './components/domBuilder';
import domEvents from './components/events/domEvents';
import navBar from './components/navBar';
import { getBoards } from './helpers/data/boardData';

const startApp = (user) => {
  domBuilder();
  domEvents();
  navBar();
  getBoards(user.uid).then((boards) => showBoards(boards));
};

export default startApp;
