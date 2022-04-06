<script>

    import TodoListApi from '../TodoListApi';
    import { todos } from '../store.js';
    import {v4 as uuidv4} from 'uuid';

    let title = "";
    let content = "";
    let formVisible = "";

    export const showForm = () => {
        formVisible = "is-active";
        
    }
    export const hideForm = () => {
        formVisible = "";
    }
    export const saveForm = () => {
        if(title.trim() === "" || content.trim() === ""){
            return;
        }

        $todos = [
            {id: uuidv4(), title: title, content: content, done: false },
            ...$todos
        ];
        TodoListApi.save($todos);

        title = "";
        content = "";
        formVisible = "";
    }

</script>

<div class="modal modal-background {formVisible}">

    <div class="moda-content">
        <div class='box'>
            <form on:submit|preventDefault={saveForm} >
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" placeholder="Title" bind:value={title}/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="Content" bind:value={content}></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary" type="submit">Save</button>
                    </div>
                    <div class="control">
                        <button class="button is-danger" on:click={hideForm}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <button class="modal-close is-large" aria-label="Close" on:click={hideForm}></button>

</div>
