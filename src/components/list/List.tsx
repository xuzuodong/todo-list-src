import { useAppSelector } from '../../hooks/useStore'
import { Empty } from './Empty'
import { ListItem } from './ListItem'

export function List() {
    const showingType = useAppSelector((state) => state.todoList.showingType)
    const todoList = useAppSelector((state) => state.todoList.list)

    const showingItems = (() => {
        if (showingType === 'all') return todoList
        else if (showingType === 'active') return todoList.filter((item) => !item.done)
        else return todoList.filter((item) => item.done)
    })()

    const listItemsEl = showingItems.map((item, index) => <ListItem key={item.id} index={index} item={item} />)

    return (
        <div className="space-y-4 flex-grow overflow-auto px-1" style={{ minHeight: '10px' }}>
            {todoList.length ? listItemsEl : <Empty />}
        </div>
    )
}
