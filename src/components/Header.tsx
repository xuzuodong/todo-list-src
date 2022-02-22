import { useAppSelector } from '../hooks/useStore'

export function Header() {
    const count = useAppSelector((state) => state.todoList.list.filter((i) => !i.done).length)

    return (
        <header className="flex justify-between pt-4">
            <h1 className="">Todo List</h1>
            <h1>{count}</h1>
        </header>
    )
}
