/** @format */

import Actors from 'components/actors';
import Banner from 'components/banner';
import Sections from 'components/sections';
import Slider from 'components/slider';
import HeaderLayout from 'layouts/HeaderLayout';
import React from 'react';
import { useRecoilValue } from 'recoil';
import * as atomRecoil from 'recoil/atoms';
import './index.scss';

const Home = () => {
     const trendingMovieState = useRecoilValue(atomRecoil.TRENDING_MOVIES_ATOM);
     const upCommingMovieState = useRecoilValue(atomRecoil.UP_COMMING_MOVIE_ATOM);
     const topRatedMovueState = useRecoilValue(atomRecoil.TOP_RATED_MOVIE_ATOM);

     const sliderCollection = [
          { state: trendingMovieState, title: 'Trending Movies' },
          { state: upCommingMovieState, title: 'Up Comming Movies' },
          { state: topRatedMovueState, title: 'Top Rated Movies' },
     ];

     const sectionCollection = [
          {
               QUERY_ATOM: atomRecoil.GENRE_MOVIES_QUERY_ATOM,
               title: 'GENRE OF MOVIES',
               ATOM: atomRecoil.GENRE_MOVIE_ATOM,
          },
          {
               QUERY_ATOM: atomRecoil.GENRE_TV_QUERY_ATOM,
               title: 'GENRE OF TV',
               ATOM: atomRecoil.GENRE_TV_ATOM,
          },
     ];

     return (
          <HeaderLayout>
               <Banner />
               {sliderCollection.map((slider_item) => (
                    <Slider {...slider_item} key={slider_item.title} />
               ))}
               {sectionCollection.map((section_item) => (
                    <Sections {...section_item} key={section_item.title} />
               ))}
               <Actors />
          </HeaderLayout>
     );
};

export default Home;
