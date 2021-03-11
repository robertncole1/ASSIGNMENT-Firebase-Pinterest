const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `
    <div class="card">
        <img class="card-img-top" src=${item.imgUrl} alt=${item.boardTitle}>
        <div class="card-body">
        <a href"#" <h5 id="board-name-title--${item.firebaseKey}" class="card-title">${item.boardTitle}</h5></a>
        <p class="card-text bold">${item.boardDescription}</p>
        <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
        </div>
      </div>`;
  });
};

export default showBoards;
