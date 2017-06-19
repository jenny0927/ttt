import React from 'react';
import ReactDOM from 'react-dom';
// import index from './index.css'
import TodoList from './TodoList'


class App extends React.Component{
	render(){
		return <div>
			<Header />
			<SubHeader />
			<TodoList />
		</div>
	}
}

class Header extends React.Component{
	render() {
		return <h1> Todo List</h1>;
	}
}

class SubHeader extends React.Component{
	render() {
		return <h2> Organize everyday</h2>;
	}
}

ReactDOM.render(<App /> , document.getElementById('root'));

