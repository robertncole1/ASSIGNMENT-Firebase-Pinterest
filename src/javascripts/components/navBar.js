const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light mb-4">
  <a class="navbar-brand title" href="#"><img src="https://i.pinimg.com/474x/13/bc/eb/13bceb594ac9faf0ecd37638c81ffea7.jpg" alt="Pinterest Logo" width="50";></a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="boards">
          Boards <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="sale-books">Pins</a>
      </li>
    </ul>
    <div id="cart-button"></div>
    <div id="logout-button"></div>
  </div>
  <div id="login-form-container"></div>
</nav>
`;
};

export default navBar;
