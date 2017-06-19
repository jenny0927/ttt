import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css'
// import todoList from './todoList.js'


class App extends React.Component{
	render(){
		return <div>
			<Header />
			<TodoList />
		
		</div>
	}
}

class Header extends React.Component{
	render() {
		return <h1> Todo List</h1>;
	}
}

class TodoList extends React.Component{
	render() {
		const items =[
			{ name: 'First item', done: false},
			{ name: 'Second item', done: false}, 
			{ name: 'Third item', done: false}
	 		
		];
		return (
			<ul> 
				{items.map(item => <TodoItem name={item.name} done={item.done} />) }
			 </ul>
		)
	}
}

class TodoItem extends React.Component{
	render() {
		return <li style ={{
			textDecoration: this.props.done? 'line-through': 'none'
		}}> {this.props.name}</li>;
	}
}

ReactDOM.render(<App /> , document.getElementById('root'));

