<script>
    import {createEventDispatcher} from "svelte"
    let title = "";
    let rating = 1;

    const dispatch = createEventDispatcher();

    const onSubmit = () => {
        if(title) {
            let movie = {title, rating};
            dispatch("submitMovie", movie);
        }
        title = "";
        rating = 1;
    }

</script>

<div class="main">
    <input bind:value={title}
        placeholder="title"
        type="text" />

    <select bind:value={rating}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
    </select>
    <button disabled={!title} on:click={onSubmit}>Submit</button>
</div>

<style>
 .main {
     width: 100%;
     display: flex;
 }
 .main input {
     flex: 1;
 }
 .main select {
     width: 7,5rem;
     margin-left: 1rem;
     margin-right: 1rem;
 }
 .main button {
     width: 7.5rem;
     border-radius: 5rem;
 }
</style>