/** @format */

import Cards from 'components/cards';
import { ListLoadDB_URL } from 'fetcher';
import React from 'react';
import { useRecoilValue } from 'recoil';
import './index.scss';

const Sections = ({ ATOM, title, QUERY_ATOM }) => {
     const genres = useRecoilValue(ATOM);
     const [activeGenre, setActiveGenre] = React.useState(genres[0]);
     const changeActiveGenre = (genre) => setActiveGenre(genre);

     return (
          <div className='sections'>
               <h1 className='sections__title'>{title}</h1>
               <div className='sections__list'>
                    {genres.map((genre) => (
                         <div
                              onClick={changeActiveGenre.bind(null, genre)}
                              key={genre.id}
                              className={`sections__item ${
                                   activeGenre?.id === genre.id ? 'sections__item--active' : ''
                              }`}>
                              <p>{genre.name}</p>
                         </div>
                    ))}
               </div>
               <Cards
                    FilterNumber={4}
                    ATOM={QUERY_ATOM}
                    activeGenre={activeGenre}
                    url={ListLoadDB_URL(activeGenre?.id)}
               />
          </div>
     );
};

export default Sections;
