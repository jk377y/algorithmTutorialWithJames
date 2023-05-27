import { Link } from 'react-router-dom'
import './CSS/Home.css'

const Home = () => {
	return (
		<>
			<div className="home-outer-wrapper">
				<Link to="/javascript"><img className="home-icons" src="https://skillicons.dev/icons?i=javascript" alt="javascript" title="Javascript" width="300" height="300" /></Link>
				<Link to="/python"><img className="home-icons" src="https://skillicons.dev/icons?i=python" alt="python" title="Python" width="300" height="300" /></Link>
			</div>
		</>
	)
}

export default Home