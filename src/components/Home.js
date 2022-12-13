import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";

export default function Home() {
	const [movies, setMovies] = useState(undefined);
    

	useEffect(() => {
		const promise = axios.get(
			"https://mock-api.driven.com.br/api/v8/cineflex/movies"
		);
		promise.then((res) => {
			setMovies(res.data);
		});
		promise.catch((err) => console.log(err.response.data));
	}, []);

	if (movies === undefined) {
		return <img src={loading} alt="Loading" />;
	}

	return (
		<ul>
			{movies.map((movie) => (
				<Link to={`sessoes/${movie.id}`} data-test="movie">
					<h1>{movie.title}</h1>
					<img src={movie.posterURL} alt="Poster" />
					<h4>{movie.overview}</h4>
					<h2>{movie.releaseDate}</h2>
				</Link>
			))}
		</ul>
	);
}
