import { writable } from "svelte/store";
import axios from "axios";

export const notes = writable([]);

export const getAllNotes = async (id) => {
  try {
    const res = await axios.get(
      `https://notemark.herokuapp.com/api/note/all/${id}`
    );
    notes.update((notes) => {
      return [...res.data];
    });
  } catch (error) {
    throw error;
  }
};

export const createNote = async (credentials) => {
  try {
    const res = await axios.post(
      "https://notemark.herokuapp.com/api/note/add",
      {
        ...credentials
      }
    );
    notes.update((notes) => {
      return [res.data, ...notes];
    });
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    const res = await axios.get(
      `https://notemark.herokuapp.com/api/note/remove/${id}`
    );
    if (res.data === "success") {
      notes.update((notes) => {
        return notes.filter((note) => note._id != id);
      });
    }
  } catch (error) {
    throw error;
  }
};
