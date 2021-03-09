const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="title-area"></div>
  <div id="main-container">
  </div>`;
};

export default domBuilder;
