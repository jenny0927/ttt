import React from 'react';
import TodoInput from './TodoInput'

class TodoList extends React.Component{
	constructor() {
		super();

		// this.items= []
		this.state = {
			items: []
		};
	}

	handleAddItem(name){
		console.log("TodoList handleAddItem", name);
		const newItems = this.state.items.concat({ name: name, done: false});
		this.setState({ items: newItems });
	}

	handleToggleDone(item){
		const newItems = this.state.items.slice();
		newItems[newItems.indexOf(item)].done = !item.done;
		this.setState({ items: newItems });
		// console.log(item);
	}
	render() {
		return (
			<div>
				<ul> 
					{this.state.items.map(
						
							item => <TodoItem name={item.name} done={item.done} onToggleDone={this.handleToggleDone.bind(this, item)} />
						) 
					}
				 </ul>
				 <TodoInput onAddItem={this.handleAddItem.bind(this)} />
			</div>
		)
	}
}

class TodoItem extends React.Component{
	constructor() {
		super();
		
	}
	render() {
		return <li className="alert alert-success" style ={{
			textDecoration: this.props.done? 'line-through': 'none'}}> 
			
			{this.props.name} &nbsp;&nbsp;
			<a href='#' onClick={this.props.onToggleDone}>{ this.props.done ? 'UNDO' : 'DONE'}</a>
		</li>;
	}
}

export default TodoList