import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import styled from "styled-components"


export default function Seats() {
	const { sessionId } = useParams()
	const [seats, setSeats] = useState(undefined);
	
	useEffect(() => {
		const promise = axios.get(
			`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
		);
		promise.then((res) => {setSeats(res.data)})
		promise.catch((err) => console.log(err.response.data))
	},[] );

	if (seats === undefined) {
		return <img src={loading} alt="Loading" />;
	} 

	const actualSeat = seats.seats

	return (
		<div>
			<h1>{actualSeat.name}</h1>
		</div>
	);
}
