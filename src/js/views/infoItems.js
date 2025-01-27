import React, {useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { CardInfo } from "../component/CardInfo";


export const InfoItems = () => {

  // const { store, actions } = useContext(Context); 
  const [infoDetails, setInfoDetails] = useState({});
  const {id,category} = useParams();

// console.log(category);

  const getInfoDetails = async ()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    try {
      const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`, requestOptions);
      const data = await response.json()
    setInfoDetails(data.result)
    console.log(data.result);
    } catch (error) {
    console.error(error);
     };
    }



  useEffect(() => {
  getInfoDetails(); // Llama a la acción para cargar los personajes
  }, []);


  return(
    <div>
        <CardInfo
        data={infoDetails}  //NO PUEDO PASAR AL CARDINFO COMO PARAMETRO DATA UN OBJETO, COMO ES INFODETAILS.
        id={id}
        category={category} //NO PUEDO PASAR LAS FOTOS DEL ENLACE PROPORCIONADO COMO PEOPLE, PORQUE VIENEN COMO CHARACTERS Y 
        // ASÍ LOS COGE EL CATEGORY (USEPARAMS),PERO AL TENERLOS COMO CHARACTERES Y NO COMO PEOPLE QUE ES COMO VIENE EN LA API NO ME 
        // PASA LA INFORMACION
        // name={infoDetails.properties.name}
        // propiedad1={infoDetails.properties.}
        // propiedad1={}
        // propiedad1={}

        />
    </div>
  );
}
