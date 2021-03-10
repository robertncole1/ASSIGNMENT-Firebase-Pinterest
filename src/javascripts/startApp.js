import showBoards from './components/boards';
import domBuilder from './components/domBuilder';
import domEvents from './components/events/domEvents';
import navigationEvents from './components/events/navigationEvents';
import navBar from './components/navBar';
import { getBoards } from './helpers/data/boardData';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  navigationEvents(user.uid);
  getBoards(user.uid).then((boards) => showBoards(boards));
};

export default startApp;
