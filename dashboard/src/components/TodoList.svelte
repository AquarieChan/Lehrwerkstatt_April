<script>
    import {todos} from '../store.js';
    import TodoListApi from '../TodoListApi.js';
    import {fly} from "svelte/transition";

    const deleteTodo = (id) => {
        const ok = confirm("todo delete?");
        if (ok) {
            $todos = $todos.filter(f => f.id !== id);
            TodoListApi.save($todos);
        }
    };
    const updateTode = (id) => {
        TodoListApi.save($todos);
    }
</script>

<div class="container">
    <div class=" columns is-multiline">
        {#each $todos as todo}
            <div class="column is-one-third">
                <div class="card" in:fly={{y:-150, x:0, duration:1200, delay:500}}>
                    <header class="card-header">
                        <button class="delete is-small" on:click={() => deleteTodo(todo.id)}></button>
                        <p class="card-header-title level"> 
                            {todo.title}
                            <input type="checkbox" on:blur={() => updateTode(todo.id)} bind:checked={todo.done}>
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <textarea class="textarea" rows="3" on:blur={() => updateTode(todo.id)} bind:value={todo.content}></textarea>

                        </div>

                    </div>
                </div>
            </div>
            {:else}
                <h1 class="title is-4 mt-4">
                    No Todos Available
                </h1>
            
        {/each}

    </div>

</div>

<style>
    .card:focus-within {
        background-color: #ffd970;
        transition: background-color 1s;
    }
</style>