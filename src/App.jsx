import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import MobileHamburgerNav from "./components/MobileHamburgerNav/MobileHamburgerNav.jsx";
import Home from "./Pages/Home/Home.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

function App() {
	return (
		<>
			<MobileHamburgerNav />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/homepage" element={<Home />} />
				<Route path="/index" element={<Home />} />
				{/* <Route path="/lessons" element={<Lessons />} /> */}
				{/* <Route path="/lessons/algorithms" element={<Algorithms />} /> */}
				{/* <Route path="/lessons/thinkers" element={<Thinkers />} /> */}
				{/* <Route path="/contact" element={<Contact />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
