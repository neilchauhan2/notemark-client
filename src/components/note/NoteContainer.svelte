<script>
  import { notes, deleteNote, getAllNotes } from "../../store/noteStore";
  import { user } from "../../store/userStore";
  import Note from "./Note.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let isNoteLoading = true;

  onMount(async () => {
    try {
      await getAllNotes($user._id);
      isNoteLoading = false;
    } catch (error) {
      throw error;
    }
  });
</script>

<style>
  /* .note-container img {
    width: 100px;
    margin-left: 40%;
  } */
</style>

<div class="container note-container">
  {#each $notes as note}
    <Note
      title={note.title}
      description={note.description}
      id={note._id}
      {deleteNote} />
    <!-- {:else}
      <img
        src="https://media.giphy.com/media/PUYgk3wpNk0WA/source.gif"
        alt="loading" /> -->
  {/each}
</div>
