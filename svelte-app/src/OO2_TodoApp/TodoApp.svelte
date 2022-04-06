<script>
    let id = 0;
    let todos = [
        {id: ++id, done:false, description:'learn svelte'},
        {id: ++id, done:true, description:'feed the turtle'},
        {id: ++id, done:false, description:'fix some bugs'}
    ];

    const remove = (todo) => {
        todos = todos.filter(t=> t !== todo);
    } 
    const add = (text) => {
        todos = [
            {id: ++id, done: false, description: text},
            ...todos
        ];
    }


</script>

<div class="container">
    
    <input  class="new-todo"
            on:keydown={event=>event.key === 'Enter' && add(event.target.value)}
            placeholder= "what is need to done?" 
            />
        <div class="left">
            <h2>TODO</h2>
            {#each todos.filter(t=>!t.done) as todo (todo)}
               <label>
                   <input type="checkbox" bind:checked={todo.done}>
                   {todo.description}
                   <button on:click={()=>remove(todo)}>X</button>
               </label> 
            {/each}
        </div>
        <div class="right">
            <h2>DONE</h2>
            {#each todos.filter(t=>t.done) as todo (todo)}
               <label>
                   <input type="checkbox" bind:checked={todo.done}>
                   {todo.description}
                   <button on:click={()=>remove(todo)}>X</button>
               </label> 
            {/each}
        </div>

</div>

<style>
    html {
        font-size: 62,5%;
    }
    * {
        padding:  0;
        margin: 0;
        box-sizing: border-box;
    }
    h2 {
        font-size: 3rem;
        font-weight: 200;
        user-select: none;
    }
    .container {
        width: 50rem;
    }
    .new-todo {
        width: 100%;
        font-size: 2rem;
    }
    .right {
        width: 50%;
        float: right;
        padding: 0 0 0 0.5rem;
    }
    .left {
        width: 50%;
        float: left;
        padding: 0 0.5rem 0 0;
    }
    label {
        display: block;
        line-height: 1;
        font-size: 1rem;
        padding: 1rem;
        margin: 0 auto 0.5rem auto;
        background-color: #eee;
        border-radius: 0.5rem;
        user-select: none;
    }
    .right label {
        background-color: greenyellow;
    }

    button {
        float: right;
        color: red;
        border: none;
        background: transparent;
        font-weight: bold;
        opacity: 0;
        user-select: none;
        cursor: pointer;
    }
    label:hover button {
        opacity: 1;
    }
</style>