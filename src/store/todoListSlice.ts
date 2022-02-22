import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
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

        add: ({ list }, { payload: content }: PayloadAction<string>) => {
            list.push({
                id: uuid(),
                content,
                done: false,
            })
        },

        toggleDone: ({ list }, { payload: id }: PayloadAction<string>) => {
            const target = list.find((item) => item.id === id)
            target && (target.done = !target.done)
        },

        changeContent: ({ list }, { payload }: PayloadAction<{ id: string; content: string }>) => {
            const target = list.find((item) => item.id === payload.id)
            target && (target.content = payload.content)
        },

        remove: ({ list }, { payload: index }: PayloadAction<number>) => {
            list.splice(index, 1)
        },

        removeAllCompleted: (state) => {
            state.list = state.list.filter((item) => !item.done)
        },
    },
})

export const { changeShowingType, add, toggleDone, changeContent, remove, removeAllCompleted } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer
