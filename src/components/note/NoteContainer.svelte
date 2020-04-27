<script>
  import Note from "./Note.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let getAllNotes;
  export let notes;

  onMount(async () => {
    try {
      await getAllNotes();
    } catch (error) {
      throw error;
    }
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
    <Note title={note.title} description={note.description} />
  {:else}
    <img
      src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
      alt="loading" />
  {/each}
</div>
