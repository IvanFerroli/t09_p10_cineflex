import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";


function App() {
	return (
		//Colocar todo App entre BrowerRouter
		<BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<Home />} />
				<Route path="sessoes" element={<Sessions />} />
        <Route path="assentos" element={<Seats />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
