const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="title-area"></div>
  <div id="main-container">
  </div>`;

  document.querySelector('#title-area').innerHTML += '<h3>Welcome To Pinterest</h3>';
};

export default domBuilder;
