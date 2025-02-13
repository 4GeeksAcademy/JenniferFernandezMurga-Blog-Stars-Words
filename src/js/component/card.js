import React, {useContext,useState} from "react";
import { Link} from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";





export const Card = ({id,name,category}) => {

const { store, actions } = useContext(Context); 

const [favorites, setFavorites] = useState(false); 

const isFavorite = store.favorites.some((fav) => fav.id === id && fav.category === category);

const handleFavorite = () => {
  actions.toggleFavorite({ name, id, category });
};

  return (

<div className="card m-2 border-5 border-warning" style={{minWidth:"14rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imagen-img-top" alt="..."/>   
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link className="btn btn-primary" to={category==="characters" ? "/people/" + id : `/${category}/${id}`}>Learn More!</Link> 
          <button
            onClick={handleFavorite}
            className={`btn ms-2 ${isFavorite ? "btn-warning" : "btn-warning"}`}
          >
          
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
  </div>
</div>

    );
  }