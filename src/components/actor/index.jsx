import { ImageDB_URL } from 'fetcher';
import * as React from 'react';
import ReactStars from 'react-rating-stars-component';
import './index.scss';

const Actor = ({ actor }) => {
     return (
          <div className='actor__card'>
               <img className='actor__image' src={ImageDB_URL(actor.profile_path)} alt='' />
               <div className='actor__content'>
                    <h1 className='actor__name'>{actor.name}</h1>
                    <ReactStars value={actor.popularity / 10} activeColor='orange' count={5} size={10} />
               </div>
          </div>
     );
};

export default Actor;
