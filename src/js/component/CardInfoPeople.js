import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoPeople = ({data,category,id}) => {

  

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
      <img src={`https://starwars-visualguide.com/assets/img/${category === "people" ? "characters" : category}/${id}.jpg`} className="imcarg-fluid rounded-start" alt="..."/>
    
    </div>
    <div className="col-md-8">
      <div className="card-body">
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
              </ul>/

      </div>
    </div>
  </div>
</div>
   
  );
}


