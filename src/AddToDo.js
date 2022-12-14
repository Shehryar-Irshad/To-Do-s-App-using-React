import React, {Component} from 'react'

class AddToDo extends Component{
    state = {
        content : ''
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                ADD new TODO:
                <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}
export default AddToDo