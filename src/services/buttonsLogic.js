export const addToFavorites = movieId => {
  const favorites = localStorage.getItem('favorites');
  let updatedFavorites = favorites ? JSON.parse(favorites) : [];
  let message = '';

  if (!updatedFavorites.includes(movieId)) {
    updatedFavorites.push(movieId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    message = 'Фільм був доданий до улюблених.';
  } else {
    message = 'Цей фільм вже є у списку улюблених.';
  }
  return message;
};

export const addToWatchingList = id => {
  const watchingList = localStorage.getItem('watchingList');
  let updatedList = watchingList ? JSON.parse(watchingList) : [];
  let message = '';

  if (!updatedList.includes(id)) {
    updatedList.push(id);
    localStorage.setItem('watchingList', JSON.stringify(updatedList));
    message = 'Фільм був доданий у список';
  } else {
    message = 'Цей фільм вже є у списку.';
  }
  return message;
};
