<script>
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
  import AddBox from "./components/AddBox.svelte";

  export let createBookmark;
  export let createNote;
  export let bookmark;
  export let note;
  export let getAllBookmarks;
  export let bookmarks;
  export let deleteBookmark;
  export let getAllNotes;
  export let notes;
  export let deleteNote;
</script>

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
