<script>
  import { onMount } from "svelte";
  import { Router, Route, navigate } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./Home.svelte";
  import Login from "./components/auth/Login.svelte";
  import Signup from "./components/auth/Signup.svelte";
  import Landing from "./components/Landing.svelte";
  import axios from "axios";
  import { user, loadUser, isAuthenticated } from "./store/userStore";

  // variables -->
  let isNoteLoading = false;
  let isBookmarkLoading = false;

  onMount(async () => {
    try {
      await loadUser();
      console.log($user);
    } catch (error) {
      throw error;
    }
  });
</script>

<style>
  main {
    font-family: "Source Sans Pro", sans-serif;
  }

  h1 {
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
</style>

<main>
  <Router>
    <Navbar />
    <Route path="/" let:params>
      {#if $isAuthenticated}
        <Home {isBookmarkLoading} {isNoteLoading} />
      {:else}
        <Landing />
      {/if}
    </Route>
    <Route path="/login" let:params>
      <Login />
    </Route>
    <Route path="/signup" let:params>
      <Signup />
    </Route>
  </Router>
</main>
