import * as React from 'react';
import { useRecoilValue } from 'recoil';
import * as recoilAtom from 'recoil/atoms';

export const useGenreSelector = () => {
     const actorsState = useRecoilValue(recoilAtom.ACTORS_ATOM);
     const movieGenreState = useRecoilValue(recoilAtom.GENRE_MOVIE_ATOM);
     const tvGenreState = useRecoilValue(recoilAtom.GENRE_TV_ATOM);
     const [collectionGenre, setCollectionGenre] = React.useState(mapGenre(movieGenreState, tvGenreState, actorsState));
     return [collectionGenre, setCollectionGenre];
};

function mapGenre(movieGenreState, tvGenreState, actorsState) {
     const collection = [];
     actorsState.map((actor) => {
          actor.known_for.map((moviePopular) => {
               moviePopular.genre_ids.map((id) => {
                    let detail = movieGenreState.find((movie) => movie.id === id);
                    if (!detail) detail = tvGenreState.find((tv) => tv.id === id);
                    collection.push(detail);
               });
          });
     });
     return [...new Set(collection)].map((element) => ({ ...element, checked: true }));
}
