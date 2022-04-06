<script>
	
	import Navbar from "./components/Navbar.svelte";
	import TodoList from "./components/TodoList.svelte";
//	import Table from "./components/Table.svelte";
	import Router from "svelte-spa-router";
	import {todos} from "./store.js";
	import { onMount } from "svelte";
	import TodoListApi from "./TodoListApi.js";
	import "../node_modules/bulma/css/bulma.min.css";

	onMount(async ()=> {
		$todos = await TodoListApi.load();
	})
	$: nTodos = $todos.length;
	$: nDoneTodos = $todos.filter(t => t.done).length;

</script>


<Navbar>Todo List {nDoneTodos}/{nTodos}</Navbar>

<Router routes={{"/":TodoList}}></Router>
