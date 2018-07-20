import React, {Component} from 'react';

class Todo extends Component {

    render() {

        const data = this.props.data;

        const todoList = data.map ( (todo)=>{
            return (
                <li key={todo.todo}>{todo.todo}</li>
            )
        })
        return(
            <div>
                <ul>
                    {todoList}
                </ul>
            </div>
        )
    }
}

export default Todo;