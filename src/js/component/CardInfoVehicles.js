import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoVehicles = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);



  // console.log(category)
  // const [personData, setPersonData] = useState(null);

  
  // const fetchPersonData = async () => {
  //   try {
  //     const response = await fetch(`https://www.swapi.tech/api/${}/${id}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setPersonData(data);
  //     console.log(data); // Para ver la respuesta en la consola
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };


  return(

    <div className="card mb-3" style={{width:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/${category === "characters" ? "people" : category}/${id}.jpg`} className="imagen imcarg-fluid rounded-start" alt="..."/>
      {/* <Link className="btn btn-primary" to={category==="characters" ? "/people/" + id : `/${category}/${id}`}>Learn More!</Link>  */}
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <ul className="text-gray-300 space-y-1">
        <h5 className="title"><strong>{data.properties?.name}</strong></h5>
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

  
//<img classNameName="Image" src="https://starwars-visualguide.com/#/characters/2" style={{width:"150rem"}}/>
   
  );
}


