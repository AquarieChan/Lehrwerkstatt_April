<script>
    export let answerText = "";
    export let checkAnswer;
</script>
<div class= "answer">
<button on:click={() => checkAnswer(answerText)}>
{answerText}
</button>
</div>
<style>
    .answer {
        float: left;
        width: 50%;
        padding: 0.5rem;
    }
    button {
        width: 100%;
        border-radius: 0,5rem;
        line-height: 2;
        padding: 0,5rem;
    }
</style>