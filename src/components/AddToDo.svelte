<script>
    import { toDos, opt } from "../store";

    let toDo = { id: "", text: "", status: false };

    function addToDo() {
		if (!toDo.text.trim()) {
			console.log("Empty Text");
			toDo.text = "";
			return;
		}

		toDo.id = Date.now();
		toDos.add(toDo)
		console.log(toDos);
		toDo = { id: "", text: "", status: false };
        
        opt.show({
            text: "TO DO added", 
            color: "primary", 
            status: true
        })
		// toastShow("TO DO added", "bg-primary");
	}

</script>

<form on:submit|preventDefault={addToDo}>
    <input
        type="text"
        placeholder="Enter to add TO DO"
        class="form-control shadow border-0"
        bind:value={toDo.text}
    />
</form>