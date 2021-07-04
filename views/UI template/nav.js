module.exports = (req) => {
  return `<nav
      class="
        navbar navbar-expand-lg
        bg-secondary
        text-uppercase
        fixed-top
        mb-6
        .__signup

      "
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" href="/" ">Chhetri</a>
        <button
          class="
            navbar-toggler
            text-uppercase
            font-weight-bold
            bg-primary
            text-white
            rounded
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/portfolio"
                >Portfolio</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/about"
                >About</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/contact"
                >Contact</a
              >
            </li>
            <li class="nav-item mx- mx-lg-1">
              ${
                req
                  ? ` <a class="nav-link py-1 px-3 px-lg-0 rounded">
                <img
                  src="assets/img/avataaars.svg"
                  class="rounded __hoverContent"
                  style="width: 40px; height: auto"
                />
              </a> 

              <div class="signout--modal">
                <div class="modal-body">
                  <a href="/signout">Sign Out</a>
                </div>
                
              </div>`
                  : ` <a class="nav-link py-3 px-3 px-lg-0 rounded" href="/signup">
                Sign Up
              </a>`
              }
               <!--
              -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
};
