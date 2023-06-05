import { writable } from 'svelte/store'

const createToDos = () => {
    const { subscribe, update, set } = writable([])

    return {
        subscribe,
        local: (toDos) => {
            set(toDos)
        },
        add: (toDo) => {
            update(toDos => toDos = [...toDos, toDo])
        },
        delete: (id) => {
            update(toDos => toDos = toDos.filter((toDo) => toDo.id !== id))
        },
        put: (id) => {
            update(toDos => toDos = toDos.map((item) =>
                item.id === id ? { ...item, status: !item.status } : item
            ))
        }
    }
}

export let toDos = createToDos()

const createOpt = () => {
    const { subscribe, update, set } = writable({
        text: "", color: "", status: false
    })

    return {
        subscribe,
        show: (options) => {
            update(n => n = options)
        }
    }
}

export const opt = createOpt()