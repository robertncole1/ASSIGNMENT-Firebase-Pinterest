const showPins = (array) => {
  // CREATE A BUTTON TO ADD AUTHORS
  document.querySelector('#title-area').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card"><h5 class="card-title">${item.pinTitle}</h5>
    <img class="card-img-top" src=${item.imgUrl} alt=${item.pinTitle}>
    <div class="card-body">
    <p class="card-text bold">${item.pinDescription}</p>
    </div>
  </div>`;
  });
};

export default showPins;
