import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoItem } from '../types/TodoItem'

type ShowingType = 'all' | 'active' | 'completed'

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        showingType: 'all' as ShowingType,
        list: (JSON.parse(localStorage.getItem('todoList') || 'null') || []) as TodoItem[],
    },
    reducers: {
        changeShowingType: (state, { payload: newType }: PayloadAction<ShowingType>) => {
            state.showingType = newType
        },
        add: ({ list }, { payload: newItem }: PayloadAction<TodoItem>) => {
            list.push(newItem)
        },
        change: ({ list }, { payload }: PayloadAction<{ index: number; newItem: TodoItem }>) => {
            list[payload.index] = payload.newItem
        },
        remove: ({ list }, { payload: index }: PayloadAction<number>) => {
            list.splice(index, 1)
        },
        removeAllCompleted: (state) => {
            state.list = state.list.filter((item) => !item.done)
        },
    },
})

export const { changeShowingType, add, change, remove, removeAllCompleted } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer
