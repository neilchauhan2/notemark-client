import { writable } from "svelte/store";

export const bookmarks = writable([]);
export const notes = writable([]);
export const user = writable({});
