<script>
  import { Link } from "svelte-routing";
  import { logout, isAuthenticated, user } from "../store/userStore";

  // navbar toggle
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
</script>

<style>
  .navbar-brand .navbar-item h1 {
    font-family: "Vidaloka", serif;
    text-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  header {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  .navbar-item .buttons button {
    margin-right: 1rem;
  }

  a:hover {
    color: inherit;
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <h1 class="logo is-size-2">Notemark</h1>
    </a>

    <a
      href="#"
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">
      {#if $user.name}
        <div class="navbar-item">
          <h3 class="is-size-5">Welcome {$user.name}</h3>
        </div>
      {:else}
        <p />
      {/if}
      <div class="navbar-item">
        {#if $isAuthenticated}
          <button class="button is-light" on:click={() => logout()}>
            <strong>Log Out</strong>
          </button>
        {:else}
          <div class="buttons">
            <Link to="/signup">
              <button class="button is-primary">
                <strong>Sign up</strong>
              </button>
            </Link>
            <Link to="/login">
              <button class="button is-light">
                <strong>Log in</strong>
              </button>
            </Link>
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>
