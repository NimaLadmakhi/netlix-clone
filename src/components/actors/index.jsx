/** @format */

import { ImageDB_URL } from 'fetcher';
import ReactStars from 'react-rating-stars-component';
import { useRecoilValue } from 'recoil';
import { ACTORS_ATOM } from 'recoil/atoms';
import './index.scss';

const Actors = () => {
     const actorsState = useRecoilValue(ACTORS_ATOM);
     return (
          <div className='actors'>
               <h1 className='actors__title'>ACTORS</h1>
               <div className='actors__row'>
                    {actorsState.map((actor) => {
                         return (
                              <div className='actors__card' key={actor.id}>
                                   <img className='actors__image' src={ImageDB_URL(actor.profile_path)} alt='' />
                                   <div className='actors__content'>
                                        <h1 className='actors__name'>{actor.name}</h1>
                                        <ReactStars value={actor.popularity / 10} activeColor='orange' count={5} size={10} />
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Actors;
