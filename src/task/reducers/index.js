import {
    ADD_TASK,
    COMPLETED_TASK,
    CLEAR_TASK,
    DESCRIPTION_CHANGED,
    LOAD_TASKS,
    DELETE_TASK
} from './actions-type'

export const initialState = { list: [], title: '' }

const todos = (state = initialState, action) => {
    switch (action.type) {

        case DESCRIPTION_CHANGED:
            return { ...state, title: action.payload }

        case ADD_TASK:
            return {
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: false
                })
            }

        case LOAD_TASKS:
            return { ...state, list: action.payload }

        case COMPLETED_TASK:
            return {
                ...state,
                list: state.list.map((todo) => ({
                    ...todo,
                    completed: todo.id === action.payload.id ? action.payload.completed : todo.completed
                }))
            }

        case DELETE_TASK:
            return {
                ...state,
                list: state.list.filter((todo) => todo.id !== action.payload.id)
            }

        case CLEAR_TASK:
            return { ...state, title: '' }
        default:
            return state
    }
}

export default todos