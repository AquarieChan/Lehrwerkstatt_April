<script>
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import Button from "./Button.svelte";
    import { FeedbackStore } from "./stores";
    import { v4 as uuiv4} from "uuid";

    let text = "";
    let btnDisabeld = true;
    let minChar = 10;
    let message = "";
    let rating = 10;
 
    const onSubmit = ()=> {
        $FeedbackStore = [
            {id:uuiv4(), text, rating:+rating},
            ...$FeedbackStore
        ];
        text = "";
        rating = 10;
        btnDisabeld = true;
    };
    const onInput = ()=> {
        console.log("onInput check")
        if (text.trim().length<= minChar){
            message = "Text must have atleast 10 Char";
            btnDisabeld = true;
            
        }else{
            message = "";
            btnDisabeld = false;
        }
    };
    const onRatingSelect = (ev) => {
        rating = ev.detail.rating;

    }
</script>

<Card>
    <header>
        <h2>
            How would you rate? 
        </h2>
    </header>
    <form on:submit|preventDefault={onSubmit}>
        <RatingSelect on:rating-select={onRatingSelect} />
        <div class="input-group">
            <input bind:value={text}
                    type="text"
                    placeholder="Tell us something"
                    on:input={onInput}/>
            <Button disabled={btnDisabeld}
                    type="submit">Send</Button>        

        </div>
    </form>
</Card>

<style>
    header {
        max-width: 40rem;
        margin: auto;
    }
    header h2{
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }
    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 1rem 1rem;
        border-radius: 1rem;
        margin-top: 1.5rem;
    }
    .input-group input {
        flex-grow: 2;
        border: none;
        font-size: 1.6rem;
        
    }
    .input-group input:focus {
        outline: none;
        
    }
</style>