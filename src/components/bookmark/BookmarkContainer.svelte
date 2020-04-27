<script>
  import Bookmark from "./Bookmark.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let getAllBookmarks;
  export let bookmarks;
  export let deleteBookmark;

  onMount(async () => {
    try {
      await getAllBookmarks();
    } catch (error) {
      throw error;
    }
  });
</script>

<style>
  .bookmark-container img {
    width: 100px;
    margin-left: 40%;
  }
</style>

<div class="container bookmark-container">
  {#each bookmarks as bookmark}
    <Bookmark
      title={bookmark.title}
      description={bookmark.description}
      url={bookmark.url}
      id={bookmark._id}
      {deleteBookmark} />
  {:else}
    <img
      src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
      alt="loading" />
  {/each}
</div>
