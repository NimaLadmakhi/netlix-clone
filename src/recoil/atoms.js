/** @format */

import {
     GenreMovieDB_URL,
     GenreTvDB_URL,
     PersonPopular_URL,
     request,
     TopRatedMovieDB_URL,
     TrendingMovieDB_URL,
     UpCommingMovieDB_URL
} from 'fetcher';
import { atom, selector, selectorFamily } from 'recoil';

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

const GENRE_MOVIES_QUERY_ATOM = atom({
     key: 'GENRE MOVIES QUERY ATOM',
     default: {},
});

const GENRE_TV_QUERY_ATOM = atom({
     key: 'GENRE TV QUERY ATOM',
     default: {},
});

const GENRE_TV_ATOM = atom({
     key: 'GENRE TV ATOM',
     default: selector({
          key: 'SELECTOR TV MOVIE',
          get: async () => {
               const response = await request(GenreTvDB_URL);
               return response?.genres;
          },
     }),
});

const GENRE_DETAIL_SELECT = atom({
     key: 'GENRE DETAIL SELECT',
     default: {},
});

const ACTORS_ATOM = selector({
     key: 'ACTORS_SELECTOR',
     get: async () => {
          const popularResponse = await request(PersonPopular_URL);
          return popularResponse.results;
     },
});

const ACTORS_ATOM_FILTER = selectorFamily({
     key: 'FILTER ACTORS ATOM',
     get: ({ genres, gender, sortAs }) => ({ get }) => {
          const actors = get(ACTORS_ATOM);
          const collection = [];
          [...genres]
               .filter((genre) => genre.checked)
               .map((genre) => {
                    actors.map((actor) => {
                         // genre_ids
                         actor.known_for.map((movie) => {
                              if (movie.genre_ids.includes(genre.id)) {
                                   collection.push(actor);
                              }
                         });
                    });
               });
          function sorter(collection) {
               switch (sortAs) {
                    case 'asc':
                         return collection.sort((a, b) => b.popularity - a.popularity);
                    case 'dsc':
                         return collection.sort((a, b) => a.popularity - b.popularity);
                    default:
                         return collection;
               }
          }

          return sorter(
               [...new Set(collection)].filter((actor) => {
                    if (gender === '0') return actor;
                    return actor.gender === +gender;
               }),
          );
     },
});

export {
     GENRE_DETAIL_SELECT,
     TRENDING_MOVIES_ATOM,
     UP_COMMING_MOVIE_ATOM,
     TOP_RATED_MOVIE_ATOM,
     GENRE_MOVIE_ATOM,
     GENRE_TV_ATOM,
     ACTORS_ATOM,
     GENRE_MOVIES_QUERY_ATOM,
     GENRE_TV_QUERY_ATOM,
     ACTORS_ATOM_FILTER,
};

