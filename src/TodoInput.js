import React from 'react';

export default class TodoInput extends React.Component{
	handleSubmit(event){
		event.preventDefault();
		this.props.onAddItem(this.refs.input.value);
		this.refs.input.value ='';
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
			<input className="alert alert-success" id="txt" type ="text" ref="input" />
			<button className="btn btn-primary" id="btn"> Add </button>
			</form>
		);
	}
}

