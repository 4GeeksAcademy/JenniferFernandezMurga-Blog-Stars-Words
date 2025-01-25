const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
           characters:[],
		   planets:[],
		   vehicles:[],
		   charactersDetails:[],
			planetsDetails:[],
		   vehiclesDetails:[],
		//    icons:[],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getCharacters: () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/people/", requestOptions)
					.then((response) => response.json())
					// Usar este ejemplo para setearlo, con setStore({ demo: demo });
					.then((data) => setStore({characters:data.results}))
					.catch((error) => console.error(error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			getPlanets: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/planets/", requestOptions)
					.then((response) => response.json())
					.then((data) => setStore({planets:data.results}))
					.catch((error) => console.error(error));
				},

			getVehicles: () => {
					const requestOptions = {
						method: "GET",
						redirect: "follow"
					  };
					  
					  fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
						.then((response) => response.json())
						.then((data) => setStore({vehicles:data.results}))
						.catch((error) => console.error(error));
				},

			getCharactersDetails: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/people/", requestOptions)
					.then((response) => response.json())
					.then((data) => setStore({charactersDetails:data.results}))
					.catch((error) => console.error(error));


			},

			getPlanetsDetails: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/planets/:id", requestOptions)
					.then((response) => response.json())
					.then((data) => setStore({planetsDetails:data.results}))
					.catch((error) => console.error(error));


			},

			getVehiclesDetails: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
					.then((response) => response.json())
					.then((data) => setStore({vehiclesDetails:data.results}))
					.catch((error) => console.error(error));


			},



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
