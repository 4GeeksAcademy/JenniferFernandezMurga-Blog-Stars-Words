import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoPlanets = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);

  return(

    <div className="card mb-3" style={{width:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img 
       src={id === "1" 
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstarwars.fandom.com%2Fes%2Fwiki%2FTatooine%2FLeyendas&psig=AOvVaw2vdJ0wFU2EaD_nnVvqlcP3&ust=1738833163797000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjzpbqYrIsDFQAAAAAdAAAAABAI"
        : `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`}className="imagen img-fluid rounded-start"
      alt="Planeta Tatooine"/>
      </div>
            <div className="col-md-8">
             <div className="card-body">
                <h5 className="card-title">{data.properties?.name}</h5>
                <ul>
                    <li>
                    <strong>Climate:</strong> {data.properties?.climate}
                    </li>
                    <li>
                    <strong>Created:</strong> {data.properties?.created}
                    </li>
                    <li>
                    <strong>Diameter:</strong> {data.properties?.diameter}
                    </li>
                    <li>
                    <strong>Edited:</strong> {data.properties?.edited}
                    </li>
                    <li>
                    <strong>Films:</strong> {data.properties?.films}
                    </li>
                    <li>
                    <strong>Gravity:</strong> {data.properties?.gravity}
                    </li>
                    <li>
                    <strong>Orbital Period:</strong> {data.properties?.orbital_period}
                    </li>
                    <li>
                    <strong>Population:</strong> {data.properties?.population}
                    </li>
                    <li>
                    <strong>Residents:</strong> {data.properties?.residents}
                    </li>
                    <li>
                    <strong>Rotation Period:</strong> {data.properties?.rotation_period}
                    </li>
                    <li>
                    <strong>Surface Water:</strong> {data.properties?.surface_water}
                    </li>
                    <li>
                    <strong>Url:</strong> {data.properties?.url}
                    </li>
                    <li>
                    <strong>Terrain:</strong> {data.properties?.terrain}
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


