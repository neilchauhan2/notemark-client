import { writable } from "svelte/store";
import axios from "axios";

export const user = writable({});

export const isAuthenticated = writable(false);

let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

// ----------Auth Methods -->
const tokenConfig = () => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // if token available add it to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

// signup method
export const signup = async (credentials) => {
  try {
    const res = await axios.post(
      "https://notemark.herokuapp.com/api/user/signup",
      {
        ...credentials
      }
    );
    user.update((user) => {
      return {
        ...res.data,
        ...user
      };
    });
    localStorage.setItem("token", res.data.token);
    isAuthenticated.update((n) => {
      return true;
    });
  } catch (error) {
    throw error;
  }
};

// login method
export const login = async (credentials) => {
  try {
    const res = await axios.post(
      "https://notemark.herokuapp.com/api/user/login",
      {
        ...credentials
      }
    );
    localStorage.setItem("token", res.data.token);
    // updated
    user.update((user) => {
      return {
        ...res.data,
        ...user
      };
    });
    isAuthenticated.update((n) => {
      return true;
    });
    getAllBookmarks();
    getAllNotes();
  } catch (error) {
    throw error;
  }
};

// get user method
export const loadUser = async () => {
  try {
    const config = tokenConfig();
    const res = await axios.get(
      "https://notemark.herokuapp.com/api/user/",
      config
    );
    user.update((user) => {
      return {
        ...res.data,
        ...user
      };
    });
    isAuthenticated.update((n) => {
      return true;
    });
  } catch (error) {
    throw error;
  }
};

// logout method
export const logout = () => {
  localStorage.removeItem("token");
  isAuthenticated.update((n) => {
    return false;
  });
  user.update((user) => {
    return {};
  });
};
