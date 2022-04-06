<script>
    import MovieInput from "./MovieInput.svelte"
    import MovieList from "./MovieList.svelte"
    import MovieSearch from "./MovieSearch.svelte"

    let movies = localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies"))
        : [];

    const addMovie = (movie) => {
        console.log(movie);
        movies = [movie, ...movies]
        localStorage.setItem("movies", JSON.stringify(movies));
    }
    const clearSearch = () => {
        movies = localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies"))
        : [];
    };
    const search = (searchTerm)=> {
        movies = movies.filter(m=>m.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }


</script>

<div class="main">
    <h1>Movie Journal</h1>
    <MovieSearch    on:clearSearch={clearSearch} 
                    on:search={event=>search(event.detail.searchTerm)} />
    <MovieInput on:submitMovie={event=>addMovie(event.detail)} />
    <MovieList {movies}/>
</div>

<style>
   
</style>