const boardInfo = (boardObject) => {
  document.querySelector('#title-area').innerHTML += `<h1>${boardObject.boardTitle}'s Pins</h1>`;
};

export default boardInfo;
