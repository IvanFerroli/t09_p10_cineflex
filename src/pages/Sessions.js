import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import styled from "styled-components"

import Footer from "../components/Footer"
import SessionCard from "../components/SessionCard"
import { textColor } from "../constants/colors"
import { BASE_URL } from "../constants/urls"


export default function Sessions() {
	const { movieId } = useParams()
	const [sessions, setSessions] = useState(undefined);
	const [movie, setMovie] = useState(undefined)
	
	useEffect(() => {
		const promise = axios.get(
			`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
		);
		promise.then((res) => {setMovie(res.data)})
		promise.catch((err) => console.log(err.response.data))
	},[] );

	if (movie === undefined) {
		return <img src={loading} alt="Loading" />;
	} 
 	

return (
	<PageContainer>
		Selecione o horário
		<ListContainer>
			{movie.days.map(m => (
				<SessionCard movie={m} key={m.id}/>
			))}
			
		</ListContainer>
		<Footer poster={movie.posterURL} title={movie.title} />
	</PageContainer>
)
}

const PageContainer = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto';
font-size: 24px;
text-align: center;
color: ${textColor};
margin-top: 30px;
padding-bottom: 120px;
padding-top: 70px;
`
const ListContainer = styled.div`
margin-top: 30px;
`

/* import { Link } from "react-router-dom";

import "./style.css";

function Sessions(props) {
    const {date, showtimes} = props;

    return (
        <li className="Session">
            <h3>{date}</h3>
            <div className="session-times">
                {showtimes.map(({id, name}) => <Link to={`/sessao/${id}`} key={id}><button>{name}</button></Link>)}
            </div>
        </li>
    );
} 

export default Sessions; */