import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle"

import Home from "./components/Home";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";
import Header from "./components/Header";

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
