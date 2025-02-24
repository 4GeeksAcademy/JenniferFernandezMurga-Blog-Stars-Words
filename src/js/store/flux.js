const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
           characters:[],
		   planets:[],
		   vehicles:[],
		favorites:[]
		
		

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getCharacters: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
			
				try {
					const response = await fetch("https://www.swapi.tech/api/people/", requestOptions);
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					const data = await response.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error('Fetch error: ', error);
				}
			},
			
			getPlanets: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
			
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/", requestOptions);
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					const data = await response.json();
				
					setStore({ planets: data.results });
				} catch (error) {
					console.error('Fetch error: ', error);
				}
			},

			getVehicles: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
			
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/", requestOptions);
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					const data = await response.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error('Fetch error: ', error);
				}
			},

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
