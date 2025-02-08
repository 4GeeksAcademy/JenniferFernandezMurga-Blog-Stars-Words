import React, {useContext,useState} from "react";
import { Link} from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";





export const Card = ({id,name,category}) => {

const { store, actions } = useContext(Context); 

const [isFavorited, setIsFavorited] = useState(false); //Esto hay que meterlo tambien en STORE? De qué forma?

const handleFavorite = () => {
  actions.toggleFavorite({id,name,category}); // Llama a toggleFavorite para agregar o eliminar el elemento
};

const addFavorite = () => {
  setIsFavorited(!isFavorited);
  if (!isFavorited) {
    // Si se marca como favorito, añade el nombre al contexto
    actions.addFavorite(name); 
  } else {
    // Si se desmarca como favorito, elimina el nombre del contexto
    actions.removeFavorite(name); 
  }
};

  return (

<div className="card m-2 border-5 border-warning" style={{minWidth:"14rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imagen-img-top" alt="..."/>   
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link className="btn btn-primary" to={category==="characters" ? "/people/" + id : `/${category}/${id}`}>Learn More!</Link> 
    <button className="favorite mx-5 bg-warning" onClick={addFavorite}>
            {isFavorited ? (
          <span role="img" aria-label="favorited">❤️</span> // Corazón lleno
        ) : (
          <span role="img" aria-label="not-favorited">🤍</span> // Corazón vacío
        )}
            {/* Icono del corazón que cambia según el estado de favorito */}
            {/* <i className={`fa-${isFavorited ? "solid" : "regular"} fa-heart`}></i> */}
          </button>
    {/* <button className="favorite mx-5" onClick={addFavorite}>
        {isFavorited ? (
          <span role="img" aria-label="favorited">❤️</span> // Corazón lleno
        ) : (
          <span role="img" aria-label="not-favorited">🤍</span> // Corazón vacío
        )}
    </button> */}



  </div>
</div>

    );
  }