<script>
    import Formular from "./Formular.svelte";
 

    let form; 

</script>

<section class="hero is-primary welcome is-small">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">Dashboard</h1>
            <h2 class="subtitle"><slot></slot></h2>
        </div>

    </div>

</section>
<div class="box">
    <div class="container">
        <div class="field is-grouped">
            <button class="button" on:click={() => form.showForm()}>New</button>
            <div class="tabs">
                <ul>
                    <li><a href="/#">Cards</a></li>
                    <li><a href="/#/table">Table</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<Formular bind:this={form}></Formular>

<style>

</style>