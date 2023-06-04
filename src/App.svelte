<script>
	import AddToDo from "./components/AddToDo.svelte";
	import ToDo from "./components/ToDo.svelte";
	import Toast from "./components/Toast.svelte";
	import { toDos } from "./store";

	
	// when we want to use toDos as method we don't put "$"
	if (localStorage.getItem("toDos")) {
		toDos.local(JSON.parse(localStorage.getItem("toDos")));
	}
	// when we want to use toDos as data we must put "$". 
	$: localStorage.setItem("toDos", JSON.stringify($toDos));
</script>

<div class="container">
	<h1 class="display-5 my-3">CRUD</h1>
	<AddToDo />

	{#each $toDos as toDo}
		<ToDo {toDo} />
	{/each}

	<Toast />
</div>
