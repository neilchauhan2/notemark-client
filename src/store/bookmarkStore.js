import { writable } from "svelte/store";
import axios from "axios";

export const bookmarks = writable([]);

export const getAllBookmarks = async (id) => {
  try {
    const res = await axios.get(
      `https://notemark.herokuapp.com/api/bookmark/all/${id}`
    );
    bookmarks.update((bookmarks) => {
      return [...res.data];
    });
  } catch (error) {
    throw error;
  }
};

export const createBookmark = async (credentials) => {
  try {
    const res = await axios.post(
      "https://notemark.herokuapp.com/api/bookmark/add",
      {
        ...credentials
      }
    );
    bookmarks.update((bookmarks) => {
      return [res.data, ...bookmarks];
    });
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async (id) => {
  try {
    const res = await axios.get(
      `https://notemark.herokuapp.com/api/bookmark/remove/${id}`
    );
    if (res.data === "success") {
      bookmarks.update((bookmarks) => {
        return bookmarks.filter((bookmark) => bookmark._id !== id);
      });
    }
  } catch (error) {
    throw error;
  }
};
