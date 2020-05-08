<script>
  import BookmarkContainer from "./components/bookmark/BookmarkContainer.svelte";
  import NoteContainer from "./components/note/NoteContainer.svelte";
  import AddBox from "./components/AddBox.svelte";

  export let createBookmark;
  export let createNote;
  export let bookmark;
  export let note;
  export let bookmarks;
  export let deleteBookmark;
  export let notes;
  export let deleteNote;
  export let isBookmarkLoading;
  export let isNoteLoading;
</script>

<div class="container addbox">
  <AddBox {createBookmark} {createNote} {bookmark} {note} />
</div>

<div class="container notemark-section">
  <div class="columns">
    <div class="column ">
      <h1 class="is-size-3 has-text-centered">Bookmarks</h1>
      <BookmarkContainer {bookmarks} {deleteBookmark} {isBookmarkLoading} />
    </div>
    <div class="column">
      <h1 class="is-size-3 has-text-centered">Notes</h1>
      <NoteContainer {notes} {deleteNote} {isNoteLoading} />
    </div>
  </div>
</div>
