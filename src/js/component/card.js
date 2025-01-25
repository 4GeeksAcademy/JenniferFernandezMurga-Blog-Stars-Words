import React, {useContext} from "react";
import { Link} from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";




export const Card = ({id,name,category}) => {


    const { store, actions } = useContext(Context); 
  
  return (

<div className="card" style={{minWidth:"10rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link className="btn btn-primary" to={"/details/"+ category + id}>Learn More!</Link>
    {/* <button className="favorite" onClick={addFavorite()}>corazon</button> */}
    {/* <span className="delete-btn" onClick={() => borrarTarea(element.id)}><i className="fa-solid fa-xmark"></i></span> */}


  </div>
</div>

    );
  }