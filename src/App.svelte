<script>
  import { onMount } from "svelte";
  import { Router, Route, navigate } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./Home.svelte";
  import Login from "./components/auth/Login.svelte";
  import Signup from "./components/auth/Signup.svelte";
  import axios from "axios";

  // variables -->
  let user = {};
  let isNoteLoading = false;
  let isBookmarkLoading = false;
  let bookmarks = [];
  let notes = [];
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  let isAuthenticated = token ? true : false;

  let bookmark = {
    title: "",
    descripiton: "",
    url: "",
    creator: user.id
  };

  let note = {
    title: "",
    description: "",
    creator: user.id
  };

  let loginCredentials = {
    email: "",
    password: ""
  };

  let signupCredentials = {
    name: "",
    email: "",
    password: "",
    username: ""
  };

  // methods -->
  // ----------Auth Methods -->
  const tokenConfig = () => {
    // Headers
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    // if token available add it to headers
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    return config;
  };

  // signup method
  const signup = async credentials => {
    try {
      document.getElementById("signup-btn").classList.add("is-loading");
      const res = await axios.post(
        "https://notemark.herokuapp.com/api/user/signup",
        {
          ...credentials
        }
      );
      document.getElementById("signup-btn").classList.remove("is-loading");
      user = {
        ...res.data.user
      };
      localStorage.setItem("token", res.data.token);
      isAuthenticated = true;
    } catch (error) {
      throw error;
    }
  };

  // login method
  const login = async credentials => {
    try {
      document.getElementById("login-btn").classList.add("is-loading");
      const res = await axios.post(
        "https://notemark.herokuapp.com/api/user/login",
        {
          ...credentials
        }
      );

      localStorage.setItem("token", res.data.token);
      user = {
        ...res.data.user
      };
      isAuthenticated = true;
      document.getElementById("login-btn").classList.remove("is-loading");
      navigate("/", { replace: true });
    } catch (error) {
      throw error;
    }
  };

  // get user method
  const loadUser = async () => {
    try {
      const config = tokenConfig();
      const res = await axios.get(
        "https://notemark.herokuapp.com/api/user/",
        config
      );
      const { name, email, _id } = res.data;
      user = {
        name,
        email,
        id: _id
      };
    } catch (error) {
      throw error;
    }
  };

  // logout method
  const logout = () => {
    localStorage.removeItem("token");
    isAuthenticated = false;
    user = {};
  };

  // ---------------------------Notes and Bookmarks Methods -->
  const getAllNotes = async () => {
    try {
      isNoteLoading = true;
      const res = await axios.get(
        `https://notemark.herokuapp.com/api/note/all/${user.id}`
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
        `https://notemark.herokuapp.com/api/bookmark/all/${user.id}`
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
      getAllBookmarks();
      getAllNotes();
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
    <Navbar {logout} {isAuthenticated} {user} />
    <Route path="/" let:params>
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
    </Route>
    <Route path="/login" let:params>
      <Login {loginCredentials} {login} />
    </Route>
    <Route path="/signup" let:params>
      <Signup {signupCredentials} {signup} />
    </Route>
  </Router>
</main>
