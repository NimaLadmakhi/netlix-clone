/** @format */

import Actor from 'components/actor';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ACTORS_ATOM } from 'recoil/atoms';
import './index.scss';

const Actors = () => {
     const actorsState = useRecoilValue(ACTORS_ATOM);
     return (
          <div className='actors'>
               <h1 className='actors__title'>
                    <Link className='actors__link' to='/actors-archive'>
                         ACTORS
                    </Link>
               </h1>
               <div className='actors__row'>
                    {actorsState.map((actor) => (
                         <Actor key={actor.id} actor={actor} />
                    ))}
               </div>
          </div>
     );
};

export default Actors;
