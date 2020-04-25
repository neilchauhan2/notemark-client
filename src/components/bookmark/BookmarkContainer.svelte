<script>
  import Bookmark from "./Bookmark.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let bookmarks = [];

  onMount(() => {
    axios
      .get(
        "https://notemark.herokuapp.com/api/bookmark/all/5ea181d42e5cf60022217eee"
      )
      .then(res => res.data)
      .then(data => {
        bookmarks = [...data];
      });
  });
</script>

<div class="container">
  {#each bookmarks as bookmark}
    <Bookmark
      title={bookmark.title}
      description={bookmark.description}
      url={bookmark.url} />
  {:else}
    <p>No bookmarks yet!</p>
  {/each}
</div>
