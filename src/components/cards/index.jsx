/** @format */

import { ImageDB_URL, request } from 'fetcher';
import React from 'react';
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
                         {console.log(item)}
                         <div className='cards__overlay'></div>
                         <div className='cards__content'>
                              <h1 className='cards__title'>{item.title}</h1>
                              <p className='cards__description'>{item.overview} ...</p>
                         </div>
                         <img src={ImageDB_URL(item.backdrop_path)} className='cards__image'></img>
                    </div>
               ))}
          </div>
     );
};

export default Cards;
