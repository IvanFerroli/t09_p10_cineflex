import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import styled from "styled-components"


export default function Sessions() {
	const { movieId } = useParams()
	const [sessions, setSessions] = useState(undefined);
	
	useEffect(() => {
		const promise = axios.get(
			`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
		);
		promise.then((res) => {setSessions(res.data)})
		promise.catch((err) => console.log(err.response.data))
	},[] );

	if (sessions === undefined) {
		return <img src={loading} alt="Loading" />;
	} 

	const days = sessions.days

	return (
		<div>
			<h1>{sessions.title}</h1>
			<img src={sessions.posterURL} alt="Poster" />
			<h4>{sessions.overview}</h4>
			<h2>{sessions.releaseDate}</h2>
			<ul>
				<div>
					<h1>Sessões</h1>
					{days.map((day) => (
						<li>
							<Link to={`assentos/${day.id}`}>
								<h1>{day.weekday}</h1>
								<h1>{day.date}</h1>
								{day.showtimes.map((actualSession) => (
									<div>
										<h3>{actualSession.name}</h3>
										<h3>{actualSession.id}</h3>
									</div>
								))}
							</Link>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
}


// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import styled from "styled-components"

// export default function ImagePage() {
//   const { imageId } = useParams()
//   const [image, setImage] = useState(undefined)

//   useEffect(() => {
//     const promise = axios.get(`https://instructor-api.sistemas.driven.com.br/projects/shuttercamp/images/${imageId}`)
//     promise.then((res) => setImage(res.data))
//     promise.catch((err) => console.log(err.response.data))
//   }, [])

//   if (image === undefined) {
//     return <div>Carregando...</div>
//   }

//   return (
//     <div>
//       <Wrapper>
//         <TopSection>
//           <Image>
//             <img src={image.url} alt={image.name} />
//           </Image>

//           <Info>
//             <Title>{image.name}</Title>
//             <div>{image.description}</div>
//           </Info>
//         </TopSection>
//       </Wrapper>
//     </div>
//   )
// }