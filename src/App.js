import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const getUniqueId = ()=>Date.now();

class App extends Component{
	constructor() {
		super();
		this.state= {
			todos: [
				{id:1000, text : ' react sutdy '},
				{id:1001, text : ' javascript sutdy '},
				{id:1002, text : ' react sutdy2 '}
			]
		}
	}
	addTodo(newTodo){
		const newTodos = [...this.state.todos, 
			{id:getUniqueId() , text: newTodo}
		];
		this.setState({ todos: newTodos});
	}
	deleteTodo(id){
		const newTodos = [...this.state.todos];
		const targetIndex = newTodos.findIndex(v =>v.id === id );
		newTodos.splice(targetIndex, 1);
		this.setState({ todos: newTodos});
	}

	render(){
		return(
			<div className="todo-app">
				<Header addTodo={  newTodo => this.addTodo(newTodo) }/>
				<TodoList todos={this.state.todos} deleteTodo={id => this.deleteTodo(id)} />
			
			</div>
		);
	}
}

export default App;