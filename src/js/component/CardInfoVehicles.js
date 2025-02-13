import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoVehicles = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);

  return(

    <div className="card m-5 justify-content-center " style={{width:"90%",height:"400px"}}>
  <div className="row g-0">
    <div className="detalles col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/${category === "characters" ? "people" : category}/${id}.jpg`} className="imcarg-fluid rounded-start" style={{width:"200px",height:"300px"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <ul className="text-gray-300 space-y-1">
        <h4 className="title"><strong>{data.properties?.name}</strong></h4>
                <li><strong>Height:</strong> {data.properties?.height}</li>
                <li><strong>Cargo Capacity:</strong> {data.properties?.cargo_capacity}</li>
                <li><strong>Consumables:</strong> {data.properties?.consumables}</li>
                <li><strong>Cost In Credits:</strong> {data.properties?.cost_in_credits}</li>
                <li><strong>Created:</strong> {data.properties?.created}</li>
                <li><strong>Crew:</strong> {data.properties?.crew}</li>
                <li><strong>Edited:</strong> {data.properties?.edited}</li>
                <li><strong>Length:</strong> {data.properties?.length}</li>
                <li><strong>Manufacturer:</strong> {data.properties?.manufacturer}</li>
                <li><strong>Max Atmosphering Speed:</strong> {data.properties?.max_atmosphering_speed}</li>
                <li><strong>Model:</strong> {data.properties?.model}</li>
                <li><strong>Passengers:</strong> {data.properties?.passengers}</li>
                <li><strong>URL:</strong> {data.properties?.url}</li>
              </ul>

      </div>
    </div>
  </div>
</div>
   
  );
}


