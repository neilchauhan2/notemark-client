<script>
  import Bookmark from "./Bookmark.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let bookmarks;
  export let deleteBookmark;
  export let isBookmarkLoading;
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
    {#if isBookmarkLoading}
      <img
        src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
        alt="loading" />
    {/if}
  {/each}
</div>
