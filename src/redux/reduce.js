import { ADD_TODO, ALL_COMPLETED, FILTER_TODO, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOOGLE_TODO, UPDATE_SEARCH } from "./kindOfAction";

const initState={
    todo:[],
    filter:"ALL",
    search:"",
}

const todoReduce=(state=initState,action)=>
{
    switch(action.type)
    {
        case ADD_TODO:
            return {
                todo:[...state.todo,{text:action.payload.text,completed:false}],
                filter:state.filter,
                search:state.search
            }
        case TOOGLE_TODO:
            return {
                todo:state.todo.map((todo,index)=>
                index===action.payload.id?{...todo,completed:!todo.completed}:todo),
                filter:state.filter,
                search:state.search
            }
        case REMOVE_TODO:
            return {
                todo:state.todo.filter((todo,index)=>
                index===action.payload.id),
                filter:state.filter,
                search:state.search
            }
        case MARK_COMPLETED:
            return {
                todo:state.todo.map((todo,index)=>
                index===action.payload.id?{...todo,completed:true}:todo),
                filter:state.filter,
                search:state.search
            }
        case MARK_INCOMPLETED:
            return {
                todo:state.todo.map((todo,index)=>
                index===action.payload.id?{...todo,completed:false}:todo),
                filter:state.filter,
                search:state.search
            }
        case FILTER_TODO:
            return {
                todo:state.todo,
                filter:action.payload.filter,
                search:state.search
            }
        
        case UPDATE_SEARCH:
            return {
                todo:state.todo,
                filter:state.filter,
                search:action.payload.search
            }
        
        case ALL_COMPLETED:
            return {
                todo:state.todo.map((tod)=>({...todo,completed:true})),
                filter:state.filter,
                search:state.search
            }
        default:
            return state;
    }
}

export default todoReduce;