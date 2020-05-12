<script>
  import {
    bookmarks,
    deleteBookmark,
    getAllBookmarks
  } from "../../store/bookmarkStore";

  import Bookmark from "./Bookmark.svelte";
  import axios from "axios";
</script>

<style>
  /* .bookmark-container img {
    width: 100px;
    margin-left: 40%;
  } */
</style>

<div class="container bookmark-container">
  {#each $bookmarks as bookmark}
    <Bookmark
      title={bookmark.title}
      description={bookmark.description}
      url={bookmark.url}
      id={bookmark._id}
      {deleteBookmark} />
  {:else}
    <!-- <img
      src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
      alt="loading" /> -->
  {/each}
</div>
