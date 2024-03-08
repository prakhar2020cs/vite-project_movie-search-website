import React, { useState, useEffect } from 'react';
import '././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import MovieList from './components/MovieList';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () =>{
		const url = "https://www.omdbapi.com/?s=toy%20story&apikey=d15c8db5";
		const response = await fetch(url); //fetches data from url
		const responseJson = await response.json()  //converts response data into json format
	} 

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;