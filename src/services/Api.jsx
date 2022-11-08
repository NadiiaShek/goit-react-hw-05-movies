import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';


async function fetchMovies(url = '', config = {}) {
  const response = await axios.get(url, config);
  return response.data;
}

export function fetchTrendMovie() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchSearchMovie(query) {
  return fetchMovies(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&include_adult=false`
  );
}

export function fetchMovieDetails(moviesId) {
  return fetchMovies(
    `${BASE_URL}movie/${moviesId}?api_key=${KEY}&language=en-US`
  );
}
export function fetchCast(moviesId) {
  return fetchMovies(
    `${BASE_URL}movie/${moviesId}/credits?api_key=${KEY}&language=en-US&`
  );
}

export function fetchReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&`
  );
}

fetchSearchMovie.propTypes = {
  search: PropTypes.string.isRequired,
};

fetchMovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchReviews.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchCast.propTypes = {
  id: PropTypes.number.isRequired,
};