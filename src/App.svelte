<script>
	import { Toast } from "bootstrap";

	let toastTopRight;
	$: console.log(toastTopRight);

	let opt = { text: "", color: "" };

	let instance;
	$: if (toastTopRight) {
		instance = new Toast(toastTopRight);
	}

	function toastShow(text, color) {
		opt = { text, color };
		instance.show();
	}

	let toDos = [];
	let toDo = { id: "", text: "", status: false };

	if (localStorage.getItem("toDos")) {
		toDos = JSON.parse(localStorage.getItem("toDos"));
	}

	$: localStorage.setItem("toDos", JSON.stringify(toDos));

	function addToDo() {
		if (!toDo.text.trim()) {
			console.log("Empty Text");
			toDo.text = "";
			return;
		}

		toDo.id = Date.now();
		toDos = [...toDos, toDo];
		console.log(toDos);
		toDo = { id: "", text: "", status: false };

		toastShow("TO DO added", "bg-primary");
	}

	function deleteToDo(id) {
		toDos = toDos.filter((toDo) => toDo.id !== id);
		toastShow("TO DO deleted", "bg-danger");
	}

	function editToDo(id) {
		toDos = toDos.map((item) =>
			item.id === id ? { ...item, status: !item.status } : item
		);
		console.log(toDos);
		toastShow("TO DO edited", "bg-warning");
	}

	$: classEditIconColor = (value) =>
		value ? "btn btn-sm btn-success" : "btn btn-sm btn-warning";
	$: classEditIcon = (value) => (value ? "bi bi-check-lg" : "bi bi-pencil");
</script>

<div class="container">
	<h1 class="display-5 my-3">CRUD</h1>
	<form on:submit|preventDefault={addToDo}>
		<input
			type="text"
			placeholder="Enter to add TO DO"
			class="form-control shadow border-0"
			bind:value={toDo.text}
		/>
	</form>

	{#each toDos as toDo}
		<div class="shadow my-3 p-3 lead">
			<!-- <p class={toDo.status ? "text-decoration-line-through" : ""}> -->
			<p class:text-decoration-line-through={toDo.status}>
				
				{toDo.text}
			</p>

			<button
				class={classEditIconColor(toDo.status)}
				on:click={editToDo(toDo.id)}
			>
				<!-- <i class={toDo.status ? "bi bi-check-lg" : "bi bi-pencil"} /> -->
				<i class={classEditIcon(toDo.status)} />
			</button>
			<button
				class="btn btn-sm btn-danger"
				on:click={deleteToDo(toDo.id)}
			>
				<i class="bi bi-trash" />
			</button>
		</div>
	{/each}

	<div class="toast-container position-absolute p-3 top-0 end-0">
		<div
			bind:this={toastTopRight}
			class="toast align-items-center text-white {opt.color} border-0"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="d-flex">
				<div class="toast-body">
					{opt.text}
				</div>
				<button
					type="button"
					class="btn-close btn-close-white me-2 m-auto"
					data-bs-dismiss="toast"
					aria-label="Close"
				/>
			</div>
		</div>
	</div>
</div>
