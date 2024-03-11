import React from 'react';

const MovieList = (props) => {
	const Favouritecomponent = props.Favouritecomponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className=' image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center '>
						<Favouritecomponent/>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;