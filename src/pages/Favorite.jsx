import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../services/fetchMovies";
import NotFound from "../components/NotFound/NotFound";
import WatchingList from "../components/WatchingList/WatchingList";
import styles from "../components/styled/myList.module.scss";

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    const favoriteIds = favorites ? JSON.parse(favorites) : [];

    const fetchFavoriteMovies = async () => {
      try {
        const movies = await Promise.all(
          favoriteIds.map((id) => getMovieDetails(id))
        );
        setFavoriteMovies(movies);
      } catch (error) {
        console.log("Помилка при отриманні улюблених фільмів:", error);
      }
    };
    fetchFavoriteMovies();
  }, [favoritesUpdated]);

  const onDeleteClick = (id) => {
    const myList = localStorage.getItem("favorites");
    const myListIds = myList ? JSON.parse(myList) : [];
    const updatedFavorites = myListIds.filter(
      (movieId) => movieId !== parseInt(id)
    );
    setFavoriteMovies(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log(id);

    setFavoritesUpdated(!favoritesUpdated);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favorite movies</h1>
      {favoriteMovies.length === 0 ? (
        <NotFound text="Firstly add movies to your watching list" />
      ) : (
        <WatchingList movies={favoriteMovies} onDeleteClick={onDeleteClick} />
      )}
    </div>
  );
};

export default Favorite;
