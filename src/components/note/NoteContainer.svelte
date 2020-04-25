<script>
  import Note from "./Note.svelte";
  import { notes } from "../../store.js";
</script>

<div class="container">
  {#each $notes as bookmark}
    <Note />
  {:else}
    <p class="has-text-centered subtitle is-5">No notes yet!</p>
  {/each}
</div>
