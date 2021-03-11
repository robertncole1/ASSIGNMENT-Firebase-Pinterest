const showPins = (array) => {
  // CREATE A BUTTON TO ADD AUTHORS
  document.querySelector('#title-area').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card"><h5 class="card-title">${item.pinTitle}</h5>
    <img class="card-img-top" src=${item.imgUrl} alt=${item.pinTitle}>
    <div class="card-body">
    <p class="card-text bold">${item.pinDescription}</p>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

export default showPins;
