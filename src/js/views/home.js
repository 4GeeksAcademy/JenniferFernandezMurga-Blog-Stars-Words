import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext"; 

export const Home = () => {

	const { store, actions } = useContext(Context); 

			useEffect(()=>{
				actions.getcharacters()
				},[])

			useEffect(()=>{
				actions.getPlanets()
				},[])

			useEffect(()=>{
				actions.getVehicles()
				},[])

			//Cual es la mejor forma de añadir mas de una función dentro de useEffect??

			

	return (

		<div className="vista">

			<h1 className="characters">Characters</h1>
			<div className="cards d-flex overflow-auto m-4">
			
			{store.characters.map((characters, index) => {
				return(
				<Card 
              	name={characters.name} 
			  	category={"characters"} 
             	id={characters.uid} 
             	key={index}/>
              // Usamos el índice del contacto como clave para optimizar el renderizado.
           
				);
	  		})}</div>


			<h1 className="Planets">Planets</h1>
			<div className="cards d-flex overflow-auto m-4">

			{store.planets.map((planets, index) => {
				return(
				<Card 
              	name={planets.name} 
			  	category={"planets"} 
             	id={planets.uid} 
             	key={index} />
              // Usamos el índice del contacto como clave para optimizar el renderizado.
        		);
	  		})}</div>


			<h1 className="Vehicles">Vehicles</h1>
			<div className="cards d-flex overflow-auto m-4">

			{store.vehicles.map((vehicles, index) => {
				return(
				<Card 
              	name={vehicles.name} 
			  	category={"vehicles"} 
             	id={vehicles.uid} 
             	key={index}/>
              // Usamos el índice del contacto como clave para optimizar el renderizado.
          	 
				);
	 		 })}</div>
	</div>
);
}
