import { change, remove } from '../../store/todoListSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { useState } from 'react'
import { Icon } from '../base/Icon'

export function ListItem({ index, item }) {
    const showingType = useAppSelector((state) => state.todoList.showingType)
    const dispatch = useAppDispatch()

    const displayClass = (function () {
        if (showingType === 'all') {
            return 'flex'
        } else if (showingType === 'active') {
            return item.done ? 'hidden' : 'flex'
        } else {
            return item.done ? 'flex' : 'hidden'
        }
    })()

    function toggleDone() {
        dispatch(change({ index, newItem: { ...item, done: !item.done } }))
    }

    const [showRemoveIcon, setShowRemoveIcon] = useState(false)

    return (
        <p
            className={displayClass + ' py-1 items-center font-lg'}
            onMouseMove={() => setShowRemoveIcon(true)}
            onMouseOut={() => setShowRemoveIcon(false)}
        >
            <input type="checkbox" name="done" id={index} className="mr-2" checked={item.done} onChange={toggleDone} />
            <label htmlFor="done" className="flex-grow">
                {item.content}
            </label>
            <Icon
                className={'cursor-pointer ' + (showRemoveIcon ? '' : 'hidden')}
                icon="mdi:close"
                color="indianred"
                onClick={() => dispatch(remove(index))}
            />
        </p>
    )
}
