import React, {useState} from 'react';

export default function AddTodo({addTodo}){
    let [title, setTitle] = useState("");     // By Default Blank value set
    let [desc, setDesc] = useState("");       // By Default Blank value set
    const submit = (e) =>{
        e.preventDefault();
        if(!title){
            alert("Titie is required");
            return false;
        }
        if(!desc){
            alert("Desc is required");
            return false;
        }
        else{
            addTodo(title, desc);
            setTitle("");   // Reset the title input field value
            setDesc("");    // Reset the desc input field value
        }
    }
  return ( 
    <>
    <div className="container my-3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit} id="form_submit">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" /> 
            </div>
            <div className="mb-3">
                 <label htmlFor="desc" className="form-label">Todo Desc</label>
                 <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                </div>
                <button type="submit" className='btn btn-primary'>Add Todo</button>
        </form>
    </div>
    </>
  )
}
