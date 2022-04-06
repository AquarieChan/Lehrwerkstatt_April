<script>
    export let movies = [];
</script>

<div class="main">
    {#each movies as movie (movie) }
        <div>
            <h3>
                {movie.title}
            </h3>
            <p>
                {movie.rating}
            </p>
        </div>
    {/each}
</div>

<style>
     .main div{
        text-align: left;
        padding-bottom: 1rem ;
        border-bottom: 1px solid black;
    }

</style>