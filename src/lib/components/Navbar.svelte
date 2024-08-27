<nav
  class="navbar is-size-5 has-background-warning is-family-monospace has-text-weight-bold"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <!-- <div class="logo"> -->
    <a
      class="navbar-item has-text-black is-size-3 is-family-monospace"
      href="/"
    >
      <!-- <img src="moon.svg" alt="" class="moonsvg" /> -->
      <i class="fa-solid fa-moon pl-1"></i>
      <p class="logoName">Moonji</p>
    </a>
    <!-- </div> -->

    <a
      role="button"
      class="navbar-burger has-text-black"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      href="/"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu is-size-4">
    <div class="navbar-start">
      <a href="/" class="navbar-item has-text-black has-text-light"> Home </a>
      <a href="/about" class="navbar-item has-text-black has-text-light">
        About
      </a>

      <a href="/blogs" class="navbar-item has-text-black has-text-light">
        Blogs
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a href="/manji's-work" class="navbar-link has-text-light"> My Work </a>

        <div class="navbar-dropdown is-size-5">
          <a
            href="/manji's-work/canvas"
            class="navbar-item has-text-warning-60"
          >
            Canvas
          </a>
          <a href="/manji's-work/clay" class="navbar-item has-text-warning-60">
            Clay
          </a>
          <a
            href="/manji's-work/crochet"
            class="navbar-item has-text-warning-60"
          >
            Crochet
          </a>
          <a href="/create" class="navbar-item has-text-warning-60"> Create </a>
          <a
            href="/manji's-work/digital"
            class="navbar-item has-text-warning-60"
          >
            Digital
          </a>
          <!--
            <hr class="navbar-divider" />
            <a href="/" class="navbar-item has-text-warning-55">
              Report an issue
            </a> 
          -->
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            href="/sign-up"
            class="button is-warning is-dark has-text-white is-medium"
          >
            <strong>Sign up</strong>
          </a>
          <a
            href="/login"
            class="button is-light has-text-warning-dark is-medium"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  /* .moonsvg {
    transform: scale(1.75);
  } */

  /* .fa-moon:hover, */
  .logoName:hover 
  /* .logo:hover  */ {
    /* color: blue; */
    color: hsl(48, 100%, 67%);
  }

  .fa-moon:hover {
    color: hsl(48, 100%, 67%);
  }

  /* .navbar-brand:hover {
    background-color: white;
  } */
</style>
