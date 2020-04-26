<script>
  import Navbar from "./components/Navbar.svelte";
  import AddBox from "./components/AddBox.svelte";
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
  import axios from "axios";

  // arrays -->
  let bookmarks = [];
  let notes = [];

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

  // const createBookmark = async credentials => {
  //   try {
  //   } catch (error) {
  //     throw error;
  //   }
  // };
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
    <AddBox />
  </div>

  <div class="container notemark-section">
    <div class="columns">
      <div class="column ">
        <h1 class="is-size-3 has-text-centered">Bookmarks</h1>
        <BookmarkContainer {getAllBookmarks} {bookmarks} />
      </div>
      <div class="column">
        <h1 class="is-size-3 has-text-centered">Notes</h1>
        <NoteContainer {getAllNotes} {notes} />
      </div>
    </div>
  </div>
</main>
