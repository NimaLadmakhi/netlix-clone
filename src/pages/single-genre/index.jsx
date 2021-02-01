import Cards from 'components/cards';
import { ListLoadDB_URL } from 'fetcher';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GENRE_DETAIL_SELECT } from 'recoil/atoms';
import './index.scss';

const SingleGenre = () => {
     // !URL PARAME
     const parameters = useParams();
     //  ! CHECK IF DON'T EXISTS THE URL PARAM OF MOVIE OR TV REDIRECT TO MAIN PAGE
     if (parameters.type !== 'Movie' && parameters.type !== 'Tv') return <Redirect to='/' />;

     return (
          <HeaderLayout>
               <div className='single-genre'>
                    <h1 className='single-genre__title'>{parameters.name}</h1>
                    <Cards ATOM={GENRE_DETAIL_SELECT} activeGenre={parameters} url={ListLoadDB_URL(parameters?.id)} />
               </div>
          </HeaderLayout>
     );
};

export default SingleGenre;
