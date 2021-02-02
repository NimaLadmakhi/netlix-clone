import Actor from 'components/actor';
import { useGenreSelector } from 'hooks/useGenreSelector';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { useRecoilValue } from 'recoil';
import * as recoilAtom from 'recoil/atoms';
import './index.scss';

const ActorsArchive = () => {
     const [genreCollection, setGenreCollection] = useGenreSelector();
     const [genderState, setGenderState] = React.useState('0');
     const [sortAsPopular, setSortAsPopular] = React.useState('');
     const actorsState = useRecoilValue(
          recoilAtom.ACTORS_ATOM_FILTER({ genres: genreCollection, gender: genderState, sortAs: sortAsPopular }),
     );
     const genderStateHandler = (e) => setGenderState(e.target.value);
     const sortAsPopularHandler = (e) => setSortAsPopular(e.target.value);

     const handleChangeGenreChecked = (id) => {
          setGenreCollection((prevState) => {
               const state = [...prevState];
               const index = state.findIndex((s) => s.id === id);
               state[index].checked = !state[index].checked;
               return state;
          });
     };

     return (
          <HeaderLayout>
               <div className='actors-archive'>
                    <div className='actors-archive__selection'>
                         <select value={genderState} onChange={genderStateHandler} className='actors-archive__select'>
                              <option value='0'>All Gender</option>
                              <option value='1'>Female</option>
                              <option value='2'>Male</option>
                         </select>
                         <select
                              value={sortAsPopular}
                              onChange={sortAsPopularHandler}
                              className='actors-archive__select'>
                              <option value=''>Sort By Popularity</option>
                              <option value='asc'>Ascending</option>
                              <option value='dsc'>Descending</option>
                         </select>
                    </div>
                    <div className='actors-archive__body'>
                         <form className='actors-archive__form'>
                              {genreCollection.map((genre) => (
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
