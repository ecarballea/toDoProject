<script>
    import { toDos, opt } from "../store";

    export let toDo;

    function deleteToDo(id) {
        toDos.delete(id);
        opt.show({
            text: "TO DO deleted", 
            color: "danger", 
            status: true
        })
        // toastShow("TO DO deleted", "bg-danger");
    }

    function editToDo(id) {
        toDos.put(id);
        console.log(toDos);
        opt.show({
            text: "TO DO edited", 
            color: "warning", 
            status: true
        })
        // toastShow("TO DO edited", "bg-warning");
    }

    $: classEditIconColor = (value) =>
        value ? "btn btn-sm btn-success" : "btn btn-sm btn-warning";
    $: classEditIcon = (value) => (value ? "bi bi-check-lg" : "bi bi-pencil");
</script>

<main>
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
        <button class="btn btn-sm btn-danger" on:click={deleteToDo(toDo.id)}>
            <i class="bi bi-trash" />
        </button>
    </div>
</main>
