import React from 'react';

export default class SearchForm extends React.Component{
	constructor() {
		super();

		this.state={
			query: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.state.query);
	}

	render(){
		return (
			<form className ='form-inline' onSubmit={this.handleSubmit.bind(this)}>
				<div className ='form-group'>
					<input 
						type ='text'
						className ='form-control'
						id ='search'
						placeholder='Enter your search'
						style={{ marginRight: '5px'}}
						onChange={(e) => this.setState({ query: e.target.value })}
					/>
				</div>

				<button
					type='submit'
					className='btn btn-default'
				>
				<span className="glyphicon glyphicon-search"></span>
				&nbsp;Search
				</button>
			</form>
		);
	}
}

SearchForm.proptypes = {
	onSearch: React.PropTypes.func.isRequired
};