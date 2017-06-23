import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css'
import TodoList from './TodoList'
import Header from './Header'
import Search from './Search'



class App extends React.Component{
	render(){
		return (

		<center><table>
		<tr><td colspan="2"><Search /></td></tr>
		<tr><td><DateDispaly /></td><td><SubHeader /></td></tr>
		<tr><td colspan="2"><TodoList/></td></tr>
			</table>
			</center>);
	}
}

class DateDispaly extends React.Component{
	render() {
		return <h2>{ new Date().toLocaleDateString()}</h2>;
	}
}


class SubHeader extends React.Component{
	render() {
		return <h2> Todo List</h2>;
	}
}

ReactDOM.render(<App /> , document.getElementById('root'));

