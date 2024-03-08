import React, { useState, useEffect } from 'react';
import '././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Searchbox from './components/Searchbox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [Searchvalue, Setsearchvalue] = useState("");

	const getMovieRequest = async (Searchvalue) =>{
		const url = `https://www.omdbapi.com/?s=${Searchvalue}&apikey=d15c8db5`;
		const response = await fetch(url); //fetches data from url
		const responseJson = await response.json()  //converts response data into json format
		if(responseJson.Search){  //when there is a search value entered then
			setMovies(responseJson.Search);   //function executes
		}      //responseJson.search =search array , in which movie data is stored
	} 
	
	useEffect(()=>{
		getMovieRequest([Searchvalue]);  // this fx is called when the page loads
	}, [Searchvalue]);
	return (
		<div className='container-fluid movie-app'>
			<div className="row d-flex align-items-center mt-4 mb-4">
				<MovieListHeading heading='Movies'/>
				<Searchbox Searchvalue={Searchvalue} Setsearchvalue={Setsearchvalue}></Searchbox>
			</div>
			<div className='row'>
				<MovieList movies={movies} />
				
			</div>
		</div>
	);
};

export default App;