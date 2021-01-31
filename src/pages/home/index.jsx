/** @format */

import Banner from 'components/banner';
import Sections from 'components/sections';
import Slider from 'components/slider';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { TOP_RATED_MOVIE_ATOM, TRENDING_MOVIES_ATOM, UP_COMMING_MOVIE_ATOM } from 'recoil/atoms';
import './index.scss';

const Home = () => {
     return (
          <HeaderLayout>
               <Banner />
               <Slider ATOM={TRENDING_MOVIES_ATOM} title='Trending Movies' />
               <Slider ATOM={UP_COMMING_MOVIE_ATOM} title='Up Comming Movies' />
               <Slider ATOM={TOP_RATED_MOVIE_ATOM} title='Top Rated Movies' />
               <Sections />
          </HeaderLayout>
     );
};

export default Home;
