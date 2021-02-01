/** @format */

import Slider from 'components/slider';
import { ListLoadDB_URL, request } from 'fetcher';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import './index.scss';

const ArchiveGenre = ({ ATOM, QUERY_ATOM, title }) => {
     const [movieData, setMovieData] = useRecoilState(QUERY_ATOM);
     const movieDataGanres = useRecoilValue(ATOM);

     React.useEffect(() => {
          (() => {
               movieDataGanres.map(async (genre) => {
                    if (!movieData[genre]) {
                         const response = await request(ListLoadDB_URL(genre.id));
                         if (response && response.items.length > 0)
                              setMovieData((prevMovies) => ({
                                   ...prevMovies,
                                   [genre.name]: {
                                        items: response.items,
                                        id: genre.id,
                                   },
                              }));
                    }
               });
          })();
     }, [title]);

     return (
          <HeaderLayout>
               <div className='archive'>
                    <h1 className='archive__title'>{title} Archives</h1>
                    {Object.keys(movieData).map((movie_key) => (
                         <Slider
                              key={movie_key}
                              state={movieData[movie_key].items}
                              title={
                                   <Link
                                        className='archive__link'
                                        to={`/genre/${movieData[movie_key].id}/${movie_key}/${title}`}>
                                        {movie_key}
                                   </Link>
                              }
                         />
                    ))}
               </div>
          </HeaderLayout>
     );
};

export default ArchiveGenre;
