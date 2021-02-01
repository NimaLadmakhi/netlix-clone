import { ImageDB_URL } from 'fetcher';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './index.scss';

const CardBody = ({ item }) => {
     return (
          <div className='cards-body__body'>
               <div className='cards-body__overlay'></div>
               <div className='cards-body__content'>
                    <h1 className='cards-body__title'>{item.title}</h1>
                    <p className='cards-body__description'>{item.overview} ...</p>
                    <ReactStars
                         classNames='cards-body__stars'
                         value={item.vote_average / 2}
                         activeColor='orange'
                         count={5}
                         size={15}
                    />
               </div>
               <img src={ImageDB_URL(item.backdrop_path)} className='cards-body__image'></img>
          </div>
     );
};

export default CardBody;
