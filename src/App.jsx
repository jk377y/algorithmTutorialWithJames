import { Routes, Route } from "react-router-dom";
import "./index.css";
import COMPONENTS from "./components";
import PAGES from './Pages';

function App() {
	return (
		<>
			<COMPONENTS.MobileHamburgerNav />
			<COMPONENTS.Header />
			<Routes>
				<Route path="/" element={<PAGES.Home />} />
				<Route path="/home" element={<PAGES.Home />} />
				<Route path="/homepage" element={<PAGES.Home />} />
				<Route path="/index" element={<PAGES.Home />} />
				<Route path="/javascript" element={<PAGES.Javascript />} />
				<Route path="/javascript/algorithms" element={<PAGES.JS_Algorithms />} />
				<Route path="/javascript/thinkers" element={<PAGES.JS_Thinkers />} />
				<Route path="/python" element={<PAGES.Python />} />
				<Route path="/python/algorithms" element={<PAGES.PY_Algorithms />} />
				<Route path="/python/thinkers" element={<PAGES.PY_Thinkers />} />
				<Route path="/contact" element={<PAGES.Contact />} />
				<Route path="*" element={<PAGES.NotFound />} />
			</Routes>
		</>
	);
}

export default App;
