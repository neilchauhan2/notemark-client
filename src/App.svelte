<script>
  import Navbar from "./components/Navbar.svelte";
  import AddBox from "./components/AddBox.svelte";
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
  import axios from "axios";
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
        <BookmarkContainer />
      </div>
      <div class="column">
        <h1 class="is-size-3 has-text-centered">Notes</h1>
        <NoteContainer />
      </div>
    </div>
  </div>
</main>
