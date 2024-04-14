import {useState }from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../redux/action";
const ToDoHead=()=>
{
    const dispatch=useDispatch();
    const [newToDoText,setNewToDoText]=useState('');
    const [search,setSearch]=useState('');

    const handleAddToDo=(text)=>
    {
        dispatch(addTask(text))
    }
    const handleToDo=()=>
    {
        if(newToDoText.trim()!=='')
        handleAddToDo(newToDoText.trim());
        setNewToDoText("");
    }

    const HandleSearchChange=(value)=>{
        setSearch(value);
        dispatch(updateSearch(value));

    }
    return<>
    <h1>Add Your Task</h1>
    <div className="input-group mb-3">
    <input type="text" value={newToDoText}  onChange={(e)=>setNewToDoText(e.target.value)}className="form-control" placeholder="Recipient's username" />
    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleToDo}>Button</button>
    </div>

    {/* filter */}

    <div>
    <div className="input-group mb-3">
    <input type="text" value={search}  onChange={(e)=>HandleSearchChange(e.target.value)}className="form-control" placeholder="Recipient's username" />
    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleToDo}>Button</button>
    </div>
    </div>

    </>
}

export default ToDoHead