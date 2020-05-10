<script>
  import { login } from "../../store/userStore";
  import { navigate } from "svelte-routing";
  export let loginCredentials;

  const handleChange = e => {
    loginCredentials[e.target.name] = e.target.value;
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      document.getElementById("login-btn").classList.add("is-loading");
      await login(loginCredentials);
      document.getElementById("login-btn").classList.remove("is-loading");
      navigate("/");
    } catch (error) {
      throw error;
    }
  };
</script>

<style>
  .auth-container {
    margin-top: 3rem;
    width: 60%;
    margin-left: 20%;
    padding: 2rem;
  }

  input {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  button {
    margin-top: 1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  .label {
    font-weight: 600;
    margin-top: 1rem;
    font-size: 22px;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 600;
  }
</style>

<div class="auth-container box">
  <h1 class="has-text-centered is-size-2">Login</h1>
  <h2 class="label">Email</h2>
  <input
    class="input"
    name="email"
    type="email"
    placeholder="Email"
    on:input={handleChange} />
  <h2 class="label">Password</h2>
  <input
    type="password"
    name="password"
    class="input"
    placeholder="Password"
    on:input={handleChange} />
  <button class="is-primary button" id="login-btn" on:click={handleSubmit}>
    Login
  </button>
</div>
