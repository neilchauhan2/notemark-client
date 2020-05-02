<script>
  import { Link } from "svelte-routing";
</script>

<style>
  .navbar-brand .navbar-item h1 {
    font-family: "Vidaloka", serif;
    text-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  header {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }
</style>

<header class="container is-fluid">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <h1 class="logo is-size-2">Notemark</h1>
      </div>
      <Link
        to="#"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </Link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!-- navbar start code here -->

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link to="/signup">
              <button class="button is-primary">
                <strong>Sign up</strong>
              </button>
            </Link>
            <Link to="/login">
              <button class="button is-light">Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
