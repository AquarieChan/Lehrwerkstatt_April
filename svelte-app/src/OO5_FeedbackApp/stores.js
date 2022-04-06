import { writable } from "svelte/store";
let storage = localStorage.getItem("feedbacks");
console.log(storage);

export const FeedbackStore = writable(JSON.parse(storage)||[]);

FeedbackStore.subscribe((feedbacks)=>{
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
})