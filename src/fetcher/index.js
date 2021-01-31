/** @format */

import axios from 'axios';

/** @format */
export const API_TOKEN = `65c4433cfe8a206341c20d3329f4a5e7`;
export const GenreMovieDB_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TOKEN}`;
export const GenreTvDB_URL = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_TOKEN}`;
export const ListLoadDB_URL = (id) => `https://api.themoviedb.org/3/list/${id}?api_key=${API_TOKEN}`;
export const PopularMovieDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}`;
export const TopRatedMovieDB_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_TOKEN}`;
export const UpCommingMovieDB_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_TOKEN}`;
export const TrendingMovieDB_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_TOKEN}`;
export const MovieDB_URL = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_TOKEN}`;
export const ImageDB_URL = (src) => `https://image.tmdb.org/t/p/original/${src}?api_key=${API_TOKEN}`;
export const request = async (...args) => {
     const response = await axios.get(...args);
     if (response.status !== 200) {
          alert('Some Error Happen');
          return;
     }
     return response.data;
};
