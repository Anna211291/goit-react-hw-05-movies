import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = new URLSearchParams({
  api_key: 'c1990577dad35384fd812d859b006174',
  language: 'en-US',
});

export const getMovies = async () => {
  const response = await axios.get(`/trending/movie/day?${params}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}&${params}`);
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?${params}`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?${params}`);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?${params}`);
  return response.data;
};
