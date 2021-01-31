/** @format */

import { ImageDB_URL, request } from 'fetcher';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './index.scss';

const Cards = ({ url }) => {
     const [items, setItems] = React.useState();

     React.useEffect(() => {
          (async () => {
               const response = await request(url);
               setItems(response?.items?.splice(0, 4));
          })();
     }, [url]);

     return (
          <div className='cards'>
               {items?.map((item) => (
                    <div className='cards__body' key={item.id}>
                         <div className='cards__overlay'></div>
                         <div className='cards__content'>
                              <h1 className='cards__title'>{item.title}</h1>
                              <p className='cards__description'>{item.overview} ...</p>
                              <ReactStars classNames='cards__stars' value={item.vote_average / 2} activeColor='orange' count={5} size={15} />
                         </div>
                         <img src={ImageDB_URL(item.backdrop_path)} className='cards__image'></img>
                    </div>
               ))}
          </div>
     );
};

export default Cards;
