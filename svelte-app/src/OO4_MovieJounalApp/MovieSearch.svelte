<script>
    import {createEventDispatcher} from "svelte";
    let searchTerm = "";
    const dispatch = createEventDispatcher();

    const search = () => {
        if (searchTerm) {
            dispatch("search", searchTerm);
        }else {
            dispatch("clearSearch", {});
        }
    };


</script>

<div class="main">
    <input  bind:value={searchTerm}
            on:keyup={search}
            placeholder="what are you looking for?"
            type="text">
</div>

<style>
    .main input {
        width: 100%;
    }

</style>