<script>
    import { FeedbackStore } from './stores';
    import FeedbackItem from './FeedbackItem.svelte';


 
</script>

<div>
    
    {#each $FeedbackStore as feedback (feedback.id) } 
        <FeedbackItem {feedback} />
        
    {/each}
        

</div>

<style>

</style>