/** @format */

import Cards from 'components/cards';
import { ListLoadDB_URL } from 'fetcher';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { GENRE_MOVIE_ATOM } from 'recoil/atoms';
import './index.scss';

const Sections = () => {
     const genres = useRecoilValue(GENRE_MOVIE_ATOM);
     const [activeGenre, setActiveGenre] = React.useState(genres[0]);
     const changeActiveGenre = (genre) => setActiveGenre(genre);

     return (
          <div className='sections'>
               <div className='sections__list'>
                    {genres.map((genre) => (
                         <div onClick={changeActiveGenre.bind(null, genre)} key={genre.id} className={`sections__item ${activeGenre?.id === genre.id ? 'sections__item--active' : ''}`}>
                              <p>{genre.name}</p>
                         </div>
                    ))}
               </div>
               <Cards url={ListLoadDB_URL(activeGenre?.id)} />
          </div>
     );
};

export default Sections;
