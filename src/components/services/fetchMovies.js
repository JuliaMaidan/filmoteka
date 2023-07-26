import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'e46f406ff40897ad9456c1375654d5d9',
  // trends: '/movie_id',
  // page: 1,
};

export const getMovies = async () => {
  const { data } = await axios.get('trending/all/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

export const getSimilad = async id => {
  const { data } = await axios.get(`/movie/${id}/similar`);
  return data;
};

export const getSearchedMovies = async search => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: search,
    },
  });
  return data;
};
