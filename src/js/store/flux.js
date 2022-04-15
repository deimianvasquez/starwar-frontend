const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://www.swapi.tech/api",
      endPoints: ["people", "vehicles", "planets"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      getItems: () => {
        let store = getStore();
        if (!store.people.length) {
          try {
            store.endPoints.forEach(async (element) => {
              let response = await fetch(`${store.urlBase}/${element}`);
              let data = await response.json();
              data.results.forEach(async (item) => {
                let responseTwo = await fetch(
                  `${store.urlBase}/${element}/${item.uid}`
                );
                let results = await responseTwo.json();
                setStore({
                  ...store,
                  [element]: [
                    ...store[element],
                    { ...results.result, like: false },
                  ],
                });
                localStorage.setItem([element], JSON.stringify(store[element]));
              });
            });
          } catch (error) {
            console.log(error);
          }
        }
      },
      addFavorite: (id) => {
        let store = getStore();
        let exist = store.favorites.find((item) => item._id == id);

        if (!exist) {
          for (let endPoint of store.endPoints) {
            let newArr = [];
            for (let item of store[endPoint]) {
              if (item._id == id) {
                item.like = true;
                setStore({
                  ...store,
                  favorites: [...store.favorites, item],
                });
              }
              newArr.push(item);
            }
            setStore({
              ...store,
              [endPoint]: newArr,
            });
            localStorage.setItem(endPoint, JSON.stringify(store[endPoint]));
            localStorage.setItem("favorites", JSON.stringify(store.favorites));
            newArr = [];
          }
        } else {
          let newFavorites = store.favorites.filter((item) => id != item._id);
          for (let endPoint of store.endPoints) {
            let newArr = [];
            for (let item of store[endPoint]) {
              if (item._id == id) {
                item.like = false;
                setStore({
                  ...store,
                  favorites: newFavorites,
                });
              }
              newArr.push(item);
            }
            setStore({
              ...store,
              [endPoint]: newArr,
            });
            localStorage.setItem(endPoint, JSON.stringify(store[endPoint]));
            localStorage.setItem("favorites", JSON.stringify(store.favorites));
            newArr = [];
          }
        }
      },
      removeFavorite: () => {
        let store = getStore();
        let newFavorites = store.favorites.filter((item) => id != item._id);
        setStore({
          ...store,
          favorites: newFavorites,
        });
        localStorage.setItem("favorites", JSON.stringify(store.favorite));
      },
    },
  };
};

export default getState;
