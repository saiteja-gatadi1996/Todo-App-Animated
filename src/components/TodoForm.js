import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const[input,setInput]=useState(props.edit?props.edit.value:'');

    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });
    

    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit?(
                <>
                 <input className="todo-input edit" 
            onChange={(e)=>setInput(e.target.value)} 
            type="text" value={input} 
            placeholder="Update your Todo"
            name="text"
            ref={inputRef}/>

            <button disabled={!input} onClick={handleSubmit}className="todo-button edit">Update</button>
            </>
            ):(
                <>
                <input className="todo-input" 
            onChange={(e)=>setInput(e.target.value)} 
            type="text" value={input} 
            placeholder="Add a Todo"
            name="text"
            ref={inputRef}/>

            <button disabled={!input} onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </button>
                </>
            )} 
           
        </form>
    )
}

export default TodoForm
