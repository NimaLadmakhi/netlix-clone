/** @format */

import Banner from 'components/banner';
import Slider from 'components/slider';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { TRENDING_MOVIES_ATOM } from 'recoil/atoms';
import './index.scss';

const Home = () => {
     return (
          <HeaderLayout>
               <Banner />
               <Slider ATOM={TRENDING_MOVIES_ATOM} />
               <div style={{ height: '100vh' }}></div>
          </HeaderLayout>
     );
};

export default Home;
