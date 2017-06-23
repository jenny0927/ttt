import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css'
import TodoList from './TodoList'
import Header from './Header'
import Search from './Search'

class App extends React.Component{
	render(){
		return (
		<center>
				<table>
					<tr><Header /></tr>
					<tr><td colspan="2"><Search /></td></tr>
					<tr><td><DateDispaly /><SubHeader /></td></tr>
					<tr><td colspan="2"><TodoList/></td></tr>
				</table>
		</center>
		);
	}
}

class DateDispaly extends React.Component{
	render() {
		return <h4>{ new Date().toLocaleDateString()}</h4>;
	}
}

class SubHeader extends React.Component{
	render() {
		return <h3> Todo List</h3>;
	}
}

ReactDOM.render(<App /> , document.getElementById('root'));

