<script>
  import Navbar from "./components/Navbar.svelte";
  import AddBox from "./components/AddBox.svelte";
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
</script>

<style>
  main {
    font-family: "Source Sans Pro", sans-serif;
  }
</style>

<main>
  <Navbar />
  <div class="container addbox">
    <AddBox />
  </div>

  <div class="container notemark-section">
    <div class="columns">
      <div class="column">
        <h1>Bookmarks</h1>
        <BookmarkContainer />
      </div>
      <div class="column">
        <h1>Notes</h1>
        <NoteContainer />
      </div>
    </div>
  </div>
</main>
