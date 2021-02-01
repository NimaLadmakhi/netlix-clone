import * as React from 'react';
import { useRecoilValue } from 'recoil';
import * as atomRecoil from 'recoil/atoms';

export const useActorGenre = () => {
     const actorsState = useRecoilValue(atomRecoil.ACTORS_ATOM);
     const genreMovieState = useRecoilValue(atomRecoil.GENRE_MOVIE_ATOM);
     const genreTvState = useRecoilValue(atomRecoil.GENRE_TV_ATOM);
     const [figuredOutGenre, setFiguredOutGenre] = React.useState(
          figureOutGenre(actorsState, genreMovieState, genreTvState),
     );

     return [
          // ! ACTORS ARRAY
          actorsState,
          // ! Figure out name of genre id
          figuredOutGenre,
          setFiguredOutGenre,
     ];
};

export const figureOutGenre = (actorsState, genreMovieState, genreTvState) => {
     let genresKnownActorId = [];
     // ! Figure out Genre ID That Actors Play on
     actorsState.map((actor) => {
          actor.known_for.map((known_movie) => {
               known_movie.genre_ids.map((id) => {
                    genresKnownActorId.push(id);
               });
          });
     });

     return [...new Set(genresKnownActorId)].map((genreID) => {
          let detailFromMovieGenre = genreMovieState.find((movie) => movie.id === genreID);
          if (!detailFromMovieGenre) detailFromMovieGenre = genreTvState.find((movie) => movie.id === genreID);
          return { ...detailFromMovieGenre, checked: true };
     });
};
