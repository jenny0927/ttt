import React from 'react';
import SearchForm from './SearchForm'
import Thumbnails from './Thumbnails'

export default class Search extends React.Component{
	constructor(props) {
		super(props);
		
		this.state={
			photos:[]
		};
	}

	search = (query) => {
		const apiUrl =`https://api.500px.com/v1/photos/search?consumer_key=HQImshiEeG1h0mRUlL4X5iJGcv3I5s7Ze9zq5BpZ&image_side[]=3&image_size[]=4&term=${query}`;
		
		fetch(apiUrl)
			.then(response => response.json())
			.then(json =>{
				console.log(json);
				console.log( this);
				this.setState({ photos: json.photos });
			})
			.catch(error => {
				console.error(error);
			});
	}
	
	render(){
		const { photos } = this.state;
		return (
			<div>
				<div style={{
						marginBottom: '20px'
					}}
				>
					<SearchForm onSearch = {this.search} />
				</div>
					<Thumbnails photos={photos} />
			</div>
		);
	}
}


