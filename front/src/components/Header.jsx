import { Link } from "react-router-dom"


const Header = ({title}) => {
	return (
		<header className="header">
			<div className="container">
				<div className="logo-wrapper">
					<span>{title}</span>
				</div>
			</div>
		</header>
	)
}


export default Header
