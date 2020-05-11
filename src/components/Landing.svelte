<script>
  import { Link } from "svelte-routing";
  let bg = "images/mockup.png";
  let note = "images/note.svg";
  let bookmark = "images/bookmark.svg";
</script>

<style>
  .landing-header {
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
  }
  .landing-img img {
    margin-top: 10%;
    margin-right: 10%;
    box-shadow: 0 8px 19px 0 rgba(0, 0, 0, 0.16);
    border-radius: 5px;
  }

  .landing-text {
    margin-top: 12%;
    margin-left: 4%;
  }

  .landing-text h1 {
    color: #fff;
    font-size: 3.1rem;
    font-weight: 700;
    width: 900px;
    letter-spacing: 1.2px;
    text-shadow: 0 28px 19px 0 rgba(173, 88, 88, 0.16);
  }

  .landing-btn {
    margin-top: 1.6rem;
    width: 300px;
    height: 50px;
    background: #2874a6;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    box-shadow: 0 8px 19px 0 rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    cursor: pointer;
  }

  .landing-body {
    margin-top: 5rem;
  }

  .landing-body .column {
    margin-left: 5rem;
    margin-bottom: 2rem;
  }

  .landing-body-img {
    width: 500px;
  }
  .landing-body-img-2 {
    height: 400px;
  }

  .column h3 {
    margin-top: 28%;
    font-weight: 500;
    font-size: 2rem;
  }

  .call-to-action {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .call-to-action h3 {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .btn-cta {
    cursor: pointer;
    width: 300px;
    height: 50px;
    background: #3498db;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    box-shadow: 0 8px 19px 0 rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    text-shadow: 0 28px 19px 0 rgba(173, 88, 88, 0.16);
  }
</style>

<div class="landing">
  <div
    class="landing-header container is-fluid"
    style="background-image: url(images/blue.svg) ">
    <div class="columns">
      <div class="column landing-text ">
        <h1>
          Take notes, Save bookmarks on the fly.
          <br />
          The productivity app for you.
        </h1>
        <Link to="/signup">
          <button class="landing-btn">Get Started</button>
        </Link>
      </div>
      <div class="column landing-img">
        <img src={bg} alt="landing" />
      </div>
    </div>
  </div>
  <div class="landing-body">
    <div class="columns is-centered">
      <div class="column is-4">
        <img src={note} alt="bookmark" class="landing-body-img column" />
      </div>
      <div class="column is-4">
        <h3>
          Take notes or plan out a blueprint for your next app.
          <br />
          All your notes in one place.
        </h3>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-4">
        <h3>
          Save your bookmarks, links and sites.
          <br />
          All your important links in one place.
        </h3>
      </div>
      <div class="column is-4">
        <img src={bookmark} alt="bookmark" class="landing-body-img-2" />
      </div>
    </div>
  </div>
  <div class="call-to-action has-text-centered">
    <h3>
      Get your workspace sorted with Notemark.
      <br />
      Store your notes and links with Notemark and never lose any important
      information.
    </h3>
    <Link to="/signup">
      <button class="btn-cta">Join Now</button>
    </Link>
  </div>
</div>
