import React, {useState,useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";

export const Navbar = () => {
	const {store , actions} = useContext(Context);



	return (
		<nav className="navbar navbar-light bg-light mb-3">
		
			<Link to="/">
				<img className="logo" src={logo} style={{width:"8rem"}}/>
			</Link>
			
			<div className="dropdown">
  				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			
				Favorite
  				</button>
			 
			  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			  {/* {items.map((favorited, index) => (
                    <li key={index}>{favorited}</li>
                ))} */}
  			</ul>
  		
			</div>
		 
		</nav>
	);
};
