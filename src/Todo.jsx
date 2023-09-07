import React, { Component } from 'react';
import './Todo.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: '',
            editedTodo: '',
            editMode: false,
            editIndex: -1, // Initialize editIndex as -1
        };
    }

    addTodo = () => {
        if (this.state.newTodo.trim() === '') return;
        this.setState((prevState) => ({
            todos: [...prevState.todos, this.state.newTodo],
            newTodo: '',
        }));
    };

    editTodo = (index) => {
        this.setState({
            editMode: true,
            editedTodo: this.state.todos[index],
            editIndex: index, // Store the index of the todo being edited
        });
    };

    updateTodo = () => {
        if (this.state.editedTodo.trim() === '') return;
        const updatedTodos = [...this.state.todos];
        updatedTodos[this.state.editIndex] = this.state.editedTodo; // Update the specific todo
        this.setState({
            todos: updatedTodos,
            editMode: false,
            editedTodo: '',
            editIndex: -1, // Reset the editIndex
        });
    };

    deleteTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);
        this.setState({
            todos: updatedTodos,
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className='topic'>Todo List</h1>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New Task [Max 40 chars]"
                                value={this.state.editMode ? this.state.editedTodo : this.state.newTodo}
                                maxLength={40}  // Set the maximum length to 40 characters
                                onChange={(e) =>
                                    this.state.editMode
                                        ? this.setState({ editedTodo: e.target.value })
                                        : this.setState({ newTodo: e.target.value })
                                }
                            />
                            <div className="input-group-append">
                                <br />
                                <button
                                    className="btn btn-primary"
                                    onClick={this.state.editMode ? this.updateTodo : this.addTodo}
                                >
                                    {this.state.editMode ? <i className="bi bi-pencil"></i> : <i className="bi bi-calendar-plus"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Tasks</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => (
                            <tr key={index}>
                                <td>{todo}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => this.editTodo(index)}>
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => this.deleteTodo(index)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;


