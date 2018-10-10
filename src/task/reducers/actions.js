import axios from 'axios'
import {
    ADD_TASK,
    CLEAR_TASK,
    DESCRIPTION_CHANGED,
    LOAD_TASKS,
    COMPLETED_TASK,
    DELETE_TASK
}
    from './actions-type'

const URL = 'http://localhost:55448/api/v1/tasks'

export const add = (title) => {
    return (dispatch) => {
        axios.post(URL, { title })
            .then(resp => dispatch({ type: ADD_TASK, payload: resp.data }))
            .then(resp => dispatch({ type: CLEAR_TASK }))
    }
}

export const changeDescription = (event) => ({
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const load = () => {
    return (dispatch) =>
        axios.get(URL)
            .then(resp => dispatch({ type: LOAD_TASKS, payload: resp.data }))
}

export const markAsCompleted = (id) => {
    return (dispatch) =>
        axios.put(`${URL}/toggle`, { id })
            .then(resp => dispatch({ type: COMPLETED_TASK, payload: resp.data }))
}

export const deleteTask = (id) => {
    return (dispatch) =>
        axios.delete(`${URL}/${id}`)
            .then(resp => dispatch({ type: DELETE_TASK, payload: resp.data }))
}