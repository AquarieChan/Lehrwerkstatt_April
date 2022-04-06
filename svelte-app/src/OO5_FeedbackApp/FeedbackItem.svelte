<script>
    import Card from "./Card.svelte";
    import {FeedbackStore} from "./stores"
    export let feedback = {};

    const onRemoveFeedback = (id) => {
        $FeedbackStore = $FeedbackStore.filter(f=>f.id !==id);
    }
</script>

<div>
    <Card>
        <div class="num-display">
            {feedback.rating}
        </div>
        <button class="close" on:click={()=> onRemoveFeedback(feedback.id)}>X</button>
        <p class="text-display">
            {feedback.text}
        </p>
    </Card>

</div>

<style>
    .num-display {
        position: absolute;
        top: -1rem;
        left: -1rem;
        width: 5rem;
        height: 5rem;
        background-color: #ff6a95;
        color: white;
        border: 1 px #eee solid;
        border-radius: 50%;
        padding: 1rem;
        text-align: center;
        font-size: 2rem;
    }
    .close {
        position:absolute;
        top: 0.5rem;
        right: 2rem;
        font-size: 2rem;
        cursor: pointer;
        border:none;
        color: red;
        background: none;
    }
</style>