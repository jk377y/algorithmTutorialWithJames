import { Link } from 'react-router-dom'
import './CSS/Contact.css'
const Contact = () => {
	return (
		<div className='contact-outer-wrapper'>
			<h1 className='contact-h1'>Contact me @</h1>
			<Link to="https://jk377y.dev" target="_blank" className='contact-jk377y'><span>🤜</span>&emsp;jk377y.dev&emsp;<span>🤛</span></Link>
			<div className='contact-icons'>
				<Link to="https://www.linkedin.com/in/james-kelly-b93a94150/" target="_blank"><img src="https://img.icons8.com/fluency/64/null/linkedin.png" alt="james kelly" height="96" width="96" /></Link>
				<Link to="https://github.com/jk377y" target="_blank"><img src="https://img.icons8.com/plasticine/64/null/github.png" alt="myGitHub" height="96" width="96" /></Link>
				<Link to="mailto:jk377y@gmail.com" target="_blank"><img src="https://img.icons8.com/fluency/64/null/apple-mail.png" alt="jk377y" height="96" width="96" /></Link>
			</div>
		</div>
	)
}

export default Contact