<script>
  import Note from "./Note.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let notes = [];

  onMount(() => {
    axios
      .get(
        "https://notemark.herokuapp.com/api/note/all/5ea181d42e5cf60022217eee"
      )
      .then(res => res.data)
      .then(data => {
        notes = [...data];
      });
  });
</script>

<style>
  .note-container img {
    width: 100px;
    margin-left: 40%;
  }
</style>

<div class="container note-container">
  {#each notes as note}
    <Note />
  {:else}
    <img
      src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
      alt="loading" />
  {/each}
</div>
