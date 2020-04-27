<script>
  export let title;
  export let description;
  export let id;
  export let deleteNote;
</script>

<style>
  .note {
    margin-top: 1rem;
  }

  .note button {
    width: 10rem;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
  }

  .note .card-header span {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .note header {
    padding-top: 1rem !important;
  }

  .note .card-content .content {
    font-size: 19px;
    font-weight: 500;
    color: #000;
  }
</style>

<div class="card note">
  <header class="card-header">
    <p class="card-header-title title is-4">{title}</p>
    <span class="tag is-link">Note</span>
  </header>
  <div class="card-content">
    <div class="content">{description}</div>
  </div>
  <footer class="card-footer">
    <div class="card-footer-item">
      <button class="button is-danger" on:click={() => deleteNote(id)}>
        Delete
      </button>
    </div>

  </footer>
</div>
