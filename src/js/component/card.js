import React, {useContext,useState} from "react";
import { Link} from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";





export const Card = ({id,name,category}) => {

const { store, actions } = useContext(Context); 

const [isFavorited, setIsFavorited] = useState(false); //Esto hay que meterlo tambien en STORE? De qué forma?

const addFavorite = () => {
  setIsFavorited(!isFavorited);
  // onFavoriteToggle(name); // Enviar el nombre de la tarjeta al componente padre
}

  return (

<div className="card" style={{minWidth:"14rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imagen-img-top" alt="..."/>   
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link className="btn btn-primary" to={category==="characters" ? "/people/" + id : `/${category}/${id}`}>Learn More!</Link> 
    <button className="favorite" onClick={addFavorite}>
        {isFavorited ? (
          <span role="img" aria-label="favorited">❤️</span> // Corazón lleno
        ) : (
          <span role="img" aria-label="not-favorited">🤍</span> // Corazón vacío
        )}
    </button>
    {/* <span className="delete-btn" onClick={() => borrarTarea(element.id)}><i className="fa-solid fa-xmark"></i></span> */}


  </div>
</div>

    );
  }