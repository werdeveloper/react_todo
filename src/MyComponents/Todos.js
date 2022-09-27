import React from 'react';
import {TodoItem} from './TodoItem';

export default function Todos(props){
    debugger;
    return (
        <div className='container'>
            <h3>Todos List</h3>
            {
                props.todos.length === 0 ? 'No todo list found':
                props.todos.map((value) => {
                    return( 
                     <TodoItem todo={value} key={value.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}