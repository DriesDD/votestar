// poll.js
import { writable } from 'svelte/store';

export const poll = writable({
  question: "What should we have for dinner?",
  method: "5SS",
  options: "Spaghetti"
})