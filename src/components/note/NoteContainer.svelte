<script>
  import { notes, deleteNote, getAllNotes } from "../../store/noteStore";
  import { user } from "../../store/userStore";
  import Note from "./Note.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let isNoteLoading;

  onMount(async () => {
    try {
      await getAllNotes($user._id);
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
  {#each $notes as note}
    <Note
      title={note.title}
      description={note.description}
      id={note._id}
      {deleteNote} />
  {:else}
    {#if isNoteLoading}
      <img
        src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
        alt="loading" />
    {/if}
  {/each}
</div>
