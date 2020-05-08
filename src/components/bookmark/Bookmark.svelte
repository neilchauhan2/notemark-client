<script>
  export let title;
  export let description;
  export let url;
  export let id;
  export let deleteBookmark;
</script>

<style>
  .bookmark {
    margin-top: 1rem;
  }

  .bookmark a {
    width: 10rem;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
  }

  .bookmark a {
    color: white;
  }

  .bookmark .card-header span {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .bookmark header {
    padding-top: 1rem !important;
  }

  .bookmark .card-content .content {
    font-size: 19px;
    font-weight: 500;
    color: #000;
  }
</style>

<!-- correct the url -->

<div class="card bookmark">
  <header class="card-header">
    <p class="card-header-title title is-4">{title}</p>
    <span class="tag is-primary">Bookmark</span>
  </header>
  <div class="card-content">
    <div class="content">{description}</div>
  </div>
  <footer class="card-footer">
    <div class="card-footer-item">
      <a class="button is-primary" href={url}>View</a>
    </div>
    <div class="card-footer-item">
      <button class="button is-danger" on:click={() => deleteBookmark(id)}>
        Delete
      </button>
    </div>

  </footer>
</div>
