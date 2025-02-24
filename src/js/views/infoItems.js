import React, {useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { CardInfoPeople } from "../component/CardInfoPeople";
import {CardInfoVehicles} from "../component/CardInfoVehicles";
import {CardInfoPlanets} from "../component/CardInfoPlanets";

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
  getInfoDetails();
  }, []);


  return(
    <div>
           {(() => {
                        switch (category) {
                            case 'people':
                                return (
                                    <CardInfoPeople
                                        data={infoDetails}
                                        id={id}
                                        category={category}
                                    />
                                );
                            case 'planets':
                                return (
                                    <CardInfoPlanets
                                        data={infoDetails}
                                        id={id}
                                        category={category}
                                    />
                                );
                            case 'vehicles':
                                return (
                                    <CardInfoVehicles
                                        data={infoDetails}
                                        id={id}
                                        category={category}
                                    />
                                );
                            default:
                                return null; 
                        }
                    })()}
            </div>
  );
}
