<script>
    let id = 0
    let todos = [
        "todo1", 
        "todo1", 
        "todo1" 
];

const remove = (index) => {
    todos = [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
    ];
}
const add = () => {
    todos = [...todos, '']
}

</script>

<div>
{#each  todos as todo, index}
    <div>
        <input bind:value={todos[index]}>
        <button on:click={()=>remove(index)}>x</button>
        <br/>
    </div>
{/each}
<button on:click={add}>add</button>
</div>

<style>

</style>