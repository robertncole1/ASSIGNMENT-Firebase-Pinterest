import domBuilder from './domBuilder';

const home = () => {
  domBuilder();
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light mb-4">
  <a class="navbar-brand title" href="#"><img src="https://i.pinimg.com/474x/13/bc/eb/13bceb594ac9faf0ecd37638c81ffea7.jpg" alt="Pinterest Logo" width="50";></a>
  <div id="login-form-container"></div>
</nav>`;
};

export default home;
