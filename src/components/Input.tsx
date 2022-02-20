import { useState } from 'react'
import { useAppDispatch } from '../hooks/useStore'
import { add } from '../store/todoListSlice'
import { Button } from './base/Button'

export function Input() {
    const dispatch = useAppDispatch()

    const [text, setText] = useState('')

    const textValue = text.trim()

    function createNewItem() {
        if (!textValue) return
        dispatch(add({ content: textValue, done: false }))
        setText('')
    }

    return (
        <div className="flex" style={{ height: '36px' }}>
            <input
                type="text"
                placeholder="New item"
                className="p-1 flex-grow"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && createNewItem()}
            />
            <Button variant="contained" className="ml-2 p-1" style={{ width: '75px' }} onClick={createNewItem}>
                Add!
            </Button>
        </div>
    )
}
