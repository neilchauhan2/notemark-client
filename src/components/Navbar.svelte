<script>
  import { Link } from "svelte-routing";
  export let logout;
  export let isAuthenticated;
  export let user;
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
        {#if user.name}
          <div class="navbar-item">
            <h3 class="is-size-5">Welcome {user.name}</h3>
          </div>
        {:else}
          <p />
        {/if}
        <div class="navbar-item">
          {#if isAuthenticated}
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
</header>
