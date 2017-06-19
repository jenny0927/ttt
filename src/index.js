import React from 'react';
import ReactDOM from 'react-dom';
// import index from './index.css'
import TodoList from './TodoList'


class App extends React.Component{
	render(){
		return <div>
			<DateDispaly />
			<Header />
			<SubHeader />
			<TodoList />
		</div>
	}
}

class DateDispaly extends React.Component{
	render() {
		return <h1>{ new Date().toLocaleDateString()}</h1>;
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

