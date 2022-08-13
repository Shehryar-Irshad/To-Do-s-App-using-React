import React, {Component} from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play card game'}
    ]
  }
  deleteToDo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
        todos
    })
  }
  addTodo = (todo) => {
     todo.id = Math.random();
     let todos = [...this.state.todos, todo];
     this.setState({
        todos
     })
  }
  render(){
   return (
     <div className='center todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
        <AddToDo addTodo={this.addTodo}/>
     </div>

   )
 }
}

export default App;
