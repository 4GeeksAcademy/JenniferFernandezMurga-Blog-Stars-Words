import React, {useState,useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";

export const Navbar = () => {
	const {store , actions} = useContext(Context);
	const [listFavorites, setListFavorites] = useState ()

	const handleRemoveFavorite = (item) => {
        actions.toggleFavorite(item); 
    };



	return (
		<nav className="navbar m-3">
            <Link to="/">
				<img className="logo" src={logo} style={{width:"8rem"}}/>
			</Link>
		<div className="dropdown">
			<button
				className="btn btn-primary me-5 dropdown-toggle" 
				type="button" 
				id="dropdownMenuButton1" 
				data-bs-toggle="dropdown" 
				aria-expanded="false" 
				onClick={() => setListFavorites(!listFavorites)} 
			>Favorites {store.favorites.length > 0 && `(${store.favorites.length})`}
			
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favorites.length > 0 ? ( 
					store.favorites.map((fav, index) => (
						<li key={index} className="dropdown-item flex justify-content-between align-items-center">
							<span>{fav.name}</span>
							<button
							//ME FALTA AJUSTAR ICONO BASURA A LA DERECHA
								className="btn btn-light btn-sm ms-3"
								onClick={() => handleRemoveFavorite(fav)}
							>
								<i className="fa-solid fa-trash"></i>
							</button>
						</li>
					))
				) : (
					<li>Empty</li>
				)}
			</ul>
		</div>
	</nav>
);
};