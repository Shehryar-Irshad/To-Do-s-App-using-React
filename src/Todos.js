import React from 'react';

const Todos = ({todos, deleteToDo})=>{
    const todoList = todos.length ?(
        todos.map(todo => {
          return(
            <div className = 'colection-item' key={todo.id}>
                  <span onClick={()=> {deleteToDo(todo.id)}}>{todo.content}</span>
            </div>
          )
        })
    ):(
       <p className='center'>You have no todos left</p>
    );
    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )
}
export default Todos;