import React, {useState,useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";

export const Navbar = () => {
	const {store , actions} = useContext(Context);
	const [favorites, setFavorites] = useState ()



	return (
		<nav className="navbar m-3">
		
			<Link to="/">
				<img className="logo" src={logo} style={{width:"8rem"}}/>
			</Link>
			
			<div className="dropdown">
  				{/* <button className="btn btn-secondary dropdown-toggle bg-warning text-black" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			
				<strong> Favorite</strong>
  				</button> */}
				  <button
                    className="btn btn-secondary bg-warning text-black me-5 dropdown-toggle" // Botón de Bootstrap con estilos adicionales
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    onClick={() => setFavorites(!favorites)} // Cambia el estado para mostrar u ocultar favoritos
                >
                    {/* Muestra la cantidad de favoritos entre paréntesis si existen */}
                    Favorites {store.isFavorited.length > 0 && `(${store.isFavorited.length})`}
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
