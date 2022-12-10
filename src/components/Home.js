import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import loading from "../assets/img/loading.gif";

export default function Home() {
    const [movies, setMovies] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
            console.log(resposta.data, "isso é o que tá vindo no get");
			setMovies(resposta.data);
		});
	}, []);

	if(movies === []) {
		return <img src={loading} alt="Loading" />;
	}else{
        console.log(movies);
    }
    return(
        <ul>
			{movies.map(movie => <Link to={`sessoes/${movie.id}`}>
            <h1>{movie.title}</h1>
                <img src={movie.posterURL} alt="Poster" />
                <h4>{movie.overview}</h4>
                <h2>{movie.releaseDate}</h2>
            </Link>)}
		</ul>
    )
}


