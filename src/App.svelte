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
  let bookmarks = [];
  let notes = [];

  let bookmark = {
    title: "",
    descripiton: "",
    url: "",
    creator: $user.id
  };

  let note = {
    title: "",
    description: "",
    creator: $user.id
  };

  // methods -->

  // ---------------------------Notes and Bookmarks Methods -->
  const getAllNotes = async () => {
    try {
      isNoteLoading = true;
      const res = await axios.get(
        `https://notemark.herokuapp.com/api/note/all/${$user._id}`
      );
      isNoteLoading = false;
      notes = [...res.data];
    } catch (error) {
      throw error;
    }
  };

  const getAllBookmarks = async () => {
    try {
      isBookmarkLoading = true;
      const res = await axios.get(
        `https://notemark.herokuapp.com/api/bookmark/all/${$user._id}`
      );
      isBookmarkLoading = false;
      bookmarks = [...res.data];
    } catch (error) {
      throw error;
    }
  };

  const createBookmark = async credentials => {
    try {
      document
        .getElementById("create-bookmark-btn")
        .classList.add("is-loading");
      const res = await axios.post(
        "https://notemark.herokuapp.com/api/bookmark/add",
        {
          ...credentials
        }
      );
      document
        .getElementById("create-bookmark-btn")
        .classList.remove("is-loading");
      bookmarks = [...bookmarks, res.data];
    } catch (error) {
      throw error;
    }
  };

  const createNote = async credentials => {
    try {
      document.getElementById("create-note-btn").classList.add("is-loading");
      const res = await axios.post(
        "https://notemark.herokuapp.com/api/note/add",
        {
          ...credentials
        }
      );
      document.getElementById("create-note-btn").classList.remove("is-loading");
      notes = [...notes, res.data];
    } catch (error) {
      throw error;
    }
  };

  const deleteBookmark = async id => {
    try {
      const res = await axios.get(
        `https://notemark.herokuapp.com/api/bookmark/remove/${id}`
      );
      if (res.data === "success")
        bookmarks = bookmarks.filter(bookmark => bookmark._id !== id);
      else console.log("error " + res.data);
    } catch (error) {
      throw error;
    }
  };

  const deleteNote = async id => {
    try {
      const res = await axios.get(
        `https://notemark.herokuapp.com/api/note/remove/${id}`
      );

      if (res.data === "success") notes = notes.filter(note => note._id != id);
      else console.log(res.data);
    } catch (error) {
      throw error;
    }
  };
  // ------------------>

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
        <Home
          {createBookmark}
          {createNote}
          {bookmark}
          {note}
          {bookmarks}
          {deleteBookmark}
          {notes}
          {deleteNote}
          {isBookmarkLoading}
          {isNoteLoading} />
      {:else}
        <Landing />
      {/if}
    </Route>
    <Route path="/login" let:params>
      <Login {loginCredentials} />
    </Route>
    <Route path="/signup" let:params>
      <Signup />
    </Route>
  </Router>
</main>
