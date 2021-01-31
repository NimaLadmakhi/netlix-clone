/** @format */

import { request, TrendingMovieDB_URL } from 'fetcher';
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

export { TRENDING_MOVIES_ATOM };
