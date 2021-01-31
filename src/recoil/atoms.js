/** @format */

import { GenreMovieDB_URL, request, TopRatedMovieDB_URL, TrendingMovieDB_URL, UpCommingMovieDB_URL } from 'fetcher';
import { atom, selector } from 'recoil';

const TRENDING_MOVIES_ATOM = atom({
     key: 'TREND_MOVIE_ATOM',
     default: selector({
          key: 'SELECTOR_ATOM_MOVIE',
          get: async () => {
               const response = await request(TrendingMovieDB_URL);
               return response?.results;
          },
     }),
});

const UP_COMMING_MOVIE_ATOM = atom({
     key: 'UP_COMMING_MOVIE_ATOM',
     default: selector({
          key: 'SELECTOR_UP_COMMING',
          get: async () => {
               const response = await request(UpCommingMovieDB_URL);
               return response?.results;
          },
     }),
});

const TOP_RATED_MOVIE_ATOM = atom({
     key: 'TOP_RATED_MOVIE_ATOM',
     default: selector({
          key: 'SELECTOR_TOP_RATED_MOVIE',
          get: async () => {
               const response = await request(TopRatedMovieDB_URL);
               return response?.results;
          },
     }),
});

const GENRE_MOVIE_ATOM = atom({
     key: 'GENRE MOVIE ATOM',
     default: selector({
          key: 'SELECTOR GENRE MOVIE',
          get: async () => {
               const response = await request(GenreMovieDB_URL);
               return response?.genres;
          },
     }),
});

export { TRENDING_MOVIES_ATOM, UP_COMMING_MOVIE_ATOM, TOP_RATED_MOVIE_ATOM, GENRE_MOVIE_ATOM };
