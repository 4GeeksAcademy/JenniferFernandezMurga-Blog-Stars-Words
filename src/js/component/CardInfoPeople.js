import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoPeople = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);


  return(

    <div className="card m-5 justify-content-center " style={{width:"90%",height:"400px"}}>
     <div className="row g-0">
        <div className="detalles col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/${category === "people" ? "characters" : category}/${id}.jpg`} className="imcarg-fluid rounded-start" style={{width:"300px",height:"400px"}}alt="..."/>
       </div>
    <div className="col-md-8">
      <div className="card-body">
      <h4 className="title"><strong>{data.properties?.name}</strong></h4>
        <ul>
            <li><strong>Height:</strong> {data.properties?.height}</li>
             <li><strong>Mass:</strong> {data.properties?.mass}</li>
                <li>
                  <strong>Hair Color:</strong> {data.properties?.hair_color}
                </li>
                <li>
                  <strong>Skin Color:</strong> {data.properties?.skin_color}
                </li>
                <li>
                  <strong>Eye Color:</strong> {data.properties?.eye_color}
                </li>
                <li>
                  <strong>Birth Year:</strong> {data.properties?.birth_year}
                </li>
                <li>
                  <strong>Gender:</strong> {data.properties?.gender}
                </li>
                <li>
                  <strong>Created:</strong> {data.properties?.created}
                </li>
                <li>
                  <strong>Edited:</strong> {data.properties?.edited}
                </li>
                <li>
                  <strong>Homeworld:</strong> {data.properties?.homeworld}
                </li>
                <li>
                  <strong>Url:</strong> {data.properties?.url}
                </li>
                <li>
                  <strong>Id:</strong> {data._id}
                </li>
              </ul>

      </div>
    </div>
  </div>
</div>
   
  );
}


