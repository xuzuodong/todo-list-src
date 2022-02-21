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

    function commitEditing(newContent) {
        dispatch(change({ index, newItem: { ...item, content: newContent } }))
    }

    const [showRemoveIcon, setShowRemoveIcon] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [contentSnapshot, setContentSnapshot] = useState('')

    return (
        <p
            className={displayClass + ' py-1 items-center font-lg'}
            onMouseMove={() => setShowRemoveIcon(true)}
            onMouseOut={() => setShowRemoveIcon(false)}
        >
            {
                // checkbox
                !isEditing && (
                    <input
                        type="checkbox"
                        name="done"
                        id={index}
                        className="mr-2"
                        checked={item.done}
                        onChange={toggleDone}
                    />
                )
            }

            {
                // content / content editor
                isEditing ? (
                    <input
                        autoFocus
                        onBlur={() => setIsEditing(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                                setIsEditing(false)
                            } else if (e.key === 'Enter') {
                                commitEditing(contentSnapshot)
                                setIsEditing(false)
                            }
                        }}
                        value={contentSnapshot}
                        onChange={(e) => setContentSnapshot(e.target.value)}
                        className="w-full p-1"
                    ></input>
                ) : (
                    <label
                        htmlFor="done"
                        className="flex-grow"
                        onDoubleClick={() => {
                            setContentSnapshot(item.content)
                            setIsEditing(true)
                        }}
                    >
                        {item.content}
                    </label>
                )
            }

            {
                // delete button
                !isEditing && (
                    <Icon
                        className={'cursor-pointer ' + (showRemoveIcon ? '' : 'hidden')}
                        icon="mdi:close"
                        color="indianred"
                        onClick={() => dispatch(remove(index))}
                    />
                )
            }
        </p>
    )
}
