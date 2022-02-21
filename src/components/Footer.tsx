import { useAppDispatch, useAppSelector } from '../hooks/useStore'
import { changeShowingType, removeAllCompleted } from '../store/todoListSlice'
import { Button } from './base/Button'
import { ButtonGroup } from './base/ButtonGroup'
import { Icon } from './base/Icon'

export function Footer() {
    const showingType = useAppSelector((state) => state.todoList.showingType)
    const dispatch = useAppDispatch()

    const items = ['All', 'Active', 'Completed']

    return (
        <div className="border-t-1 border-gray border-solid flex justify-between items-center">
            <ButtonGroup>
                {items.map((label, index) => (
                    <Button
                        className="px-4"
                        variant={showingType.toLowerCase() === label.toLowerCase() ? 'outlined' : 'text'}
                        key={index}
                        onClick={(_) => {
                            dispatch(changeShowingType(index === 0 ? 'all' : index === 1 ? 'active' : 'completed'))
                        }}
                    >
                        {label}
                    </Button>
                ))}
            </ButtonGroup>

            <span
                style={{ fontSize: '25px' }}
                className="cursor-pointer px-1"
                onClick={() => {
                    if (window.confirm('Do you really want to clean all completed items?')) {
                        dispatch(removeAllCompleted())
                    }
                }}
            >
                🧹
            </span>
        </div>
    )
}
