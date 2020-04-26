<script>
  export let bookmark;
  export let note;
  export let createBookmark;

  // methods
  const bookmarkHandleChange = e => {
    bookmark[e.target.name] = e.target.value;
  };

  const noteHandleChange = e => {
    note[e.target.id] = e.target.value;
    console.log(note);
  };
</script>

<style>
  .addbox-container {
    margin-top: 3rem;
  }

  .bookmark-section {
    border-right: 2px #d5dbdb solid;
    padding-left: 1rem;
    padding-right: 2rem;
  }

  button {
    font-weight: 600;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
  }

  label {
    font-weight: 500;
    margin-top: 1rem;
    font-size: 22px;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 600;
  }

  .notes-section {
    padding-left: 2rem;
    padding-right: 1rem;
  }

  .notes-section textarea {
    height: 228px;
  }
</style>

<div class="container box addbox-container">
  <div class="columns">
    <div class="column bookmark-section">

      <h1 class="is-size-3 has-text-centered">Bookmark Url</h1>

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            on:input={bookmarkHandleChange}
            name="title"
            type="text"
            placeholder="Enter a Title" />
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              name="description"
              on:input={bookmarkHandleChange}
              class="textarea"
              placeholder="Description" />
          </div>
        </div>

        <div class="field">
          <label class="label">Url</label>
          <div class="control">
            <input
              name="url"
              on:input={bookmarkHandleChange}
              class="input"
              type="text"
              placeholder="Enter Url" />
          </div>
        </div>

        <button class="button is-primary is-fullwidth">Create Bookmark</button>
      </div>
    </div>

    <div class="column notes-section">
      <h1 class="is-size-3 has-text-centered">Take Notes</h1>

      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          id="title"
          on:input={noteHandleChange}
          type="text"
          placeholder="Enter a Title" />
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea
            class="textarea"
            id="description"
            on:input={noteHandleChange}
            placeholder="Description" />
        </div>
      </div>

      <button class="button is-link is-fullwidth">Create Note</button>

    </div>

  </div>
</div>
