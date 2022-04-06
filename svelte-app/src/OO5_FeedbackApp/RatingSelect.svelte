<script>

    import { createEventDispatcher } from 'svelte';

    let selected = 10;

    const dispatch = createEventDispatcher();

    const onChange = (ev) => {
        let rating = ev.target.value;
        console.log(rating);
        dispatch("rating-select", {rating})
    }
   

</script>

<ul class="rating">
    {#each [1,2,3,4,5,6,7,8,9,10] as rating (rating)}
        <li>
            <input type="radio" 
                    id={"num"+rating}
                    name="rating"
                    value={rating}
                    on:change={onChange}
                    checked={selected === rating}/>

            <label for={"num"+rating}>{rating}</label>
        </li>
        
    {/each}
</ul>

<style>
    .rating {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 3rem 0;
    }
    .rating li {
        position: relative;
        background: #f4f4f4;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 2rem;
        border: 1px #eee solid;
        transition: 0.3s;
    }
    .rating li label {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    .rating li:hover {
        background-color: #ff6a95;

    }

    [type="radio"] {
        opacity: 0;
    }
    [type="radio"]:checked ~ label {
        background: #ff6a95;
        color: #fff;
    }
    ul {
        list-style: none;
    }

</style>