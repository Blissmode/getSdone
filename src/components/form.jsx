import React, {Component} from 'react';

import Todo from './todo';

class Form extends Component {

    constructor(props){
        super(props);
        this.state= {
            count: 0,
            todo : [],
            tempTodo: ''
        }
    }

    addTodo(){
        console.log("A todo add request was sent",this.state);
        this.setState({
            todo : [...this.state.todo,{todo : this.state.tempTodo}],
            count: this.state.count+1
        },()=>{
            this.printTodo();
        });
    }

    printTodo(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="container">
                <form>
                <div className="form-group">
                    <label>Add stuff to Get Done!</label>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Add a todo here"
                    ref={el => this.inputEntry = el}
                    onChange={
                        (event)=>{
                            this.setState({
                                tempTodo: event.target.value
                            })
                        }

                    }
                    required
                    />
                    <button 
                    className=" btn-info btn-block"
                    type="submit"
                    onClick={
                        ()=>{
                            if(this.state.tempTodo!=='')
                            this.addTodo();
                            this.inputEntry.value = "";
                            this.setState({tempTodo:''})
                        }
                    }
                    >Submit</button>
                </div>
                </form>
                <Todo data={this.state.todo}/>

            </div>
        )
    }
}

export default Form;