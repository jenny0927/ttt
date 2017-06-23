import React from 'react';

const Thumbmnails =({ photos }) => (
	<div>
	{
		photos.map(photo => (
			<div key ={photo.id}> 
				style={{
					float: 'left',
					marginRight: '10px',
					marginBottom: '10px',
				}}
				<img src={photos.image_url[0]} />
			</div>
		))}
	</div>
);

Thumbmnails.propTypes ={
	photos: React.PropTypes.array.isRequired
};

export default Thumbmnails;