import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {id: 1, rating: 2, text: "feedback 1"},
    {id: 2, rating: 3, text: "feedback 2"},
    {id: 3, rating: 9, text: "feedback 3"}

]);