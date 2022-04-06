<script>
    export let type = "button";
    export let style = "primary";
    export let disabled = false;
</script>

<button {type} class={style} {disabled}>
    <slot></slot>
</button>

<style>
    button {
        color: white;
        border: 0;
        border-radius: 0.8rem;
        width: 10rem;
        height: 4rem;
        cursor: pointer;
    }
    .primary {
        background-color: #202142;
    }
    .secondary{
        background-color: #ff6a95;
    }
    button:hover {
        transform: scale(0.98);
    }
    button:disabled {
        background-color: #ccc;
        color: #333;
        cursor: auto;
    }
</style>