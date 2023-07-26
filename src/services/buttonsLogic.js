export const addToFavorites = (movieId) => {
  const favorites = localStorage.getItem("favorites");
  let updatedFavorites = favorites ? JSON.parse(favorites) : [];

  if (!updatedFavorites.includes(movieId)) {
    updatedFavorites.push(movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log("Фільм був доданий до улюблених.");
  } else {
    console.log("Цей фільм вже є у списку улюблених.");
  }
};

export const addToWatchingList = (id) => {
  const watchingList = localStorage.getItem("watchingList");
  let updatedList = watchingList ? JSON.parse(watchingList) : [];

  if (!updatedList.includes(id)) {
    updatedList.push(id);
    localStorage.setItem("watchingList", JSON.stringify(updatedList));
    console.log("Фільм був доданий у список");
  } else {
    console.log("Цей фільм вже є у списку.");
  }
};
