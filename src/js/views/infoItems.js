import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { CardInfo } from "../component/cardInfo";
import { Context } from "../store/appContext";


export const InfoItems = () => {

  const { store, actions } = useContext(Context); 
  
  useEffect(()=>{
    actions.getCharactersDetails()
    },[])

    return (
    
     <div>
     
       
                        {store.charactersDetails.map((charactersDetails, index) => {
                            return(
                            <CardInfo 
                            name={charactersDetails.name} 
                            category={"Details"} 
                            id={charactersDetails.uid} 
                            birth={charactersDetails.birth} 
                            key={index}/>
                          // Usamos el índice del contacto como clave para optimizar el renderizado.
                       
                        //Necesito encontrar la forma de enviar solo el contenido de la tarjeta seleccionada en el botón Lear More!,
                        //  y que se pasen los valores del result.properties de postman.
                            );
                        })}</div>
 
    );
};