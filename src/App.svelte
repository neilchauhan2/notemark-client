<script>
  import Navbar from "./components/Navbar.svelte";
  import AddBox from "./components/AddBox.svelte";
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
  import axios from "axios";

  // variables -->
  let bookmarks = [];
  let notes = [];

  let bookmark = {
    title: "",
    descripiton: "",
    url: "",
    creator: "5ea181d42e5cf60022217eee"
  };

  let note = {
    title: "",
    description: "",
    creator: "5ea181d42e5cf60022217eee"
  };

  //  methods -->
  const getAllNotes = async () => {
    try {
      const res = await axios.get(
        "https://notemark.herokuapp.com/api/note/all/5ea181d42e5cf60022217eee"
      );
      notes = [...res.data];
    } catch (error) {
      throw error;
    }
  };

  const getAllBookmarks = async () => {
    try {
      const res = await axios.get(
        "https://notemark.herokuapp.com/api/bookmark/all/5ea181d42e5cf60022217eee"
      );
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
  <Navbar />
  <div class="container addbox">
    <AddBox {createBookmark} {createNote} {bookmark} {note} />
  </div>

  <div class="container notemark-section">
    <div class="columns">
      <div class="column ">
        <h1 class="is-size-3 has-text-centered">Bookmarks</h1>
        <BookmarkContainer {getAllBookmarks} {bookmarks} {deleteBookmark} />
      </div>
      <div class="column">
        <h1 class="is-size-3 has-text-centered">Notes</h1>
        <NoteContainer {getAllNotes} {notes} {deleteNote} />
      </div>
    </div>
  </div>
</main>
