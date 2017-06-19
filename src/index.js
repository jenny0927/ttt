import React from 'react';
import ReactDOM from 'react-dom';
// import index from './index.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


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

ReactDOM.render(<App /> , document.getElementById('root'));

