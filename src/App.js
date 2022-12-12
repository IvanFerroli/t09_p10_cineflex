import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sessoes/:movieId" element={<Sessions />} />
				<Route path="/assentos" element={<Seats />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
