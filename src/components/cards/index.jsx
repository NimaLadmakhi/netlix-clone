/** @format */

import CardBody from 'components/card-body';
import { request } from 'fetcher';
import { BackDropPathFilter } from 'help/backdropPathFilter';
import React from 'react';
import { useRecoilState } from 'recoil';
import './index.scss';

const Cards = ({ url, activeGenre, ATOM, FilterNumber }) => {
     const [items, setItems] = React.useState();
     const [GenreMovieArchiveState, setGenreMovieArchiveState] = useRecoilState(ATOM);

     React.useEffect(() => {
          (async () => {
               if (!GenreMovieArchiveState[activeGenre.name]) {
                    const response = await request(url);
                    setItems(BackDropPathFilter(response?.items)?.splice(0, FilterNumber || response?.items?.length));
                    setGenreMovieArchiveState((prevMovies) => ({
                         ...prevMovies,
                         [activeGenre.name]: {
                              items: BackDropPathFilter(response?.items),
                              id: activeGenre.id,
                         },
                    }));
               } else {
                    setItems(BackDropPathFilter(GenreMovieArchiveState[activeGenre.name].items)?.splice(0, 4));
               }
          })();
     }, [url]);

     return (
          <div className='cards'>
               {items?.map((item) => (
                    <CardBody key={item.id} item={item} />
               ))}
          </div>
     );
};

export default Cards;
