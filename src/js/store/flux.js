const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
           characters:[],
		   planets:[],
		   vehicles:[],
		// isFavorited:[],
		favorites:[],
		
		

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},


			getcharacters: () => {
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

				//Este fetch envía la información a la CardInfo de los 3 grupos

				//   getInfoDetails: async ()=>{
				// 	const requestOptions = {
				// 	  method: "GET",
				// 	  redirect: "follow"
				// 	};
					
				// 	try {
				// 	  const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`, requestOptions);
				// 	  const data = await response.json()
				// 	setInfoDetails(data.result)
				//   console.log(data.result);
				// 	} catch (error) {
				// 	console.error(error);
				//    };
				//   }
					// ,
		
			// addFavorite: (name) => {
			// 	setStore((prevStore) => ({
			// 	  ...prevStore,
			// 	  favorites: [...prevStore.favorites, name], // Agrega el nombre al array de favoritos
			// 	}));
			//   }
			//   ,

			//   removeFavorite: (name) => {
			// 	setStore((prevStore) => ({
			// 	  ...prevStore,
			// 	  favorites: prevStore.favorites.filter(favorite => favorite !== name), // Elimina el nombre del array de favoritos
			// 	}));
			//   },
			// }
			
			// removeFavorite: (id) => {
			// // 	const store = getStore(); // Obtenemos el estado actual de la tienda
			// 	const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid); // Filtramos los favoritos para excluir el item con el uid dado
			// 	setStore({ favorites: updatedFavorites }); // Actualizamos el estado
			// },
			

			// toggleFavorite: (item) => {
			// 	const store = getStore(); // Obtiene el estado actual
			// 	const exists = store.favorites.find((fav) => fav.name === item.name); // Verifica si el favorito ya existe
		
			// 	if (exists) {
			// 	  // Si el favorito existe, lo elimina del array
			// 	  setStore({
			// 		favorites: store.favorites.filter((fav) => fav.name !== item.name),
			// 	  });
			// 	} else {
			// 	  // Si no existe, lo agrega al array
			// 	  setStore({
			// 		favorites: [...store.favorites, item],
			// 	  });
			// 	}
			//   }
			//   ,

			// Función para agregar o eliminar favoritos
		toggleFavorite: (item) => {
			const store = getStore(); // Obtiene el estado actual
			const exists = store.favorites.find((fav) => fav.name === item.name); // Verifica si el favorito ya existe
	
			if (exists) {
			  // Si el favorito existe, lo elimina del array
			  setStore({
				favorites: store.favorites.filter((fav) => fav.name !== item.name),
			  });
			} else {
			  // Si no existe, lo agrega al array
			  setStore({
				favorites: [...store.favorites, item],
			  });
			}
		  },
	
		  // Función para eliminar un favorito directamente por su `uid`
		  removeFavorite: (id) => {
			const store = getStore(); // Obtiene el estado actual
			setStore({
			  favorites: store.favorites.filter((fav) => fav.id !== id), // Filtra y excluye el favorito con el UID dado
			});
		  }
		  ,
		}
		}
	};

export default getState;
