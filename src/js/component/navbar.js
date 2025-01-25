import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
		{/* //ternario con pathname para el link? */}
			<Link to="/">
				<img className="logo" src={logo} style={{width:"8rem"}}/>
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			</Link>
			<div className="ml-auto">
				<Link to="/details/:">
				{/* <button className="btn btn-primary">Provisional vista cardinfo</button> */}
				</Link>
			</div>
		</nav>
	);
};
