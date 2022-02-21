import { useAppDispatch, useAppSelector } from '../hooks/useStore'
import { changeShowingType } from '../store/todoListSlice'
import { Button } from './base/Button'
import { ButtonGroup } from './base/ButtonGroup'

export function Footer() {
    const showingType = useAppSelector((state) => state.todoList.showingType)
    const dispatch = useAppDispatch()

    const items = ['All', 'Active', 'Completed']

    return (
        <div className="border-t-1 border-gray border-solid">
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
        </div>
    )
}
