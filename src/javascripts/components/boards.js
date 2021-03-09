const showBoards = (array) => {
  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.imgUrl} alt=${item.boardTitle}>
        <div class="card-body">
        <a href"#" <h5 id="board-name-title--${item.firebaseKey}" class="card-title">${item.boardTitle}</h5></a>
        <p class="card-text bold">${item.boardDescription}</p>
        </div>
      </div>`;
  });
};

export default showBoards;

// <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}">Edit Board</button>
// <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
