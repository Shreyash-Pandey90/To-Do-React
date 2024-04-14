import { ADD_TODO, ALL_COMPLETED, FILTER_TODO, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOOGLE_TODO, UPDATE_SEARCH } from "./kindOfAction";

export const addTask=(text)=>({
    type:ADD_TODO,
    payload:{text}
});


export const toggleToDo=(id)=>(
    {
        type:TOOGLE_TODO,
        payload:{id}
    }
)

export const removeToDo=(id)=>(
    {
        type:REMOVE_TODO,
        payload:{id}
    }
)

export const markCompleted=(id)=>(
    {
        type:MARK_COMPLETED,
        payload:{id}
    }
)

export const markIncompleted=(id)=>(
    {
        type:MARK_INCOMPLETED,
        payload:{id}
    }
)

export const filterToDo=(filter)=>(
    {
        type:FILTER_TODO,
        payload:{filter}
    }
)

export const allCompleted=()=>(
    {
        type:ALL_COMPLETED,
    }
)

export const updateSearch=(search)=>(
    {
        type:UPDATE_SEARCH,
        payload:{search}
    }
)