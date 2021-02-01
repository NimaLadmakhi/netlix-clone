import Actor from 'components/actor';
import { useActorGenre } from 'hooks/useActorGenre';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import './index.scss';

const ActorsArchive = () => {
     const [actorsState, genresState, setGenreState] = useActorGenre();
     const handleChangeGenreChecked = (id) =>
          setGenreState((prevGenreState) => {
               const state = [...prevGenreState];
               const index = state.findIndex((genre) => genre.id === id);
               state[index].checked = !state[index].checked;
               return state;
          });

     return (
          <HeaderLayout>
               <div className='actors-archive'>
                    <div className='actors-archive__selection'>
                         <select className='actors-archive__select'>
                              <option value='2'>All Gender</option>
                              <option value='0'>Male</option>
                              <option value='1'>Female</option>
                         </select>
                         <select className='actors-archive__select'>
                              <option value=''>Sort By Popularity</option>
                              <option value='0'>Ascending</option>
                              <option value='1'>Descending</option>
                         </select>
                    </div>
                    <div className='actors-archive__body'>
                         <form className='actors-archive__form'>
                              {genresState.map((genre) => (
                                   <div key={genre.id} className='actors-archive__label'>
                                        {genre.name}
                                        <div className='actors-archive__checkbox'>
                                             <input
                                                  onChange={handleChangeGenreChecked.bind(null, +genre.id)}
                                                  type='checkbox'
                                                  checked={genre.checked}
                                                  className='actors-archive__input'
                                             />
                                             <div className='actors-archive__button'></div>
                                        </div>
                                   </div>
                              ))}
                         </form>
                         <div className='actors-archive__row'>
                              {actorsState.map((actor) => (
                                   <Actor actor={actor} key={actor.id} />
                              ))}
                         </div>
                    </div>
               </div>
          </HeaderLayout>
     );
};

export default ActorsArchive;
