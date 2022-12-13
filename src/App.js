import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle"

import Home from "./components/Home";
import Sessions from "./pages/Sessions.js";
import Seats from "./components/Seats/index"
import Header from "./components/Header";
import Success from "./components/Success"

function App() {
	const [movie, setMovie] = useState(undefined);
	return (
		<BrowserRouter>
		<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home setMovie={setMovie}/>} />
				<Route path="sessoes/:movieId" element={<Sessions />} />
				<Route path="assentos/:sessionId" element={<Seats />} />
				<Route path="sucesso" element={<Success />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
