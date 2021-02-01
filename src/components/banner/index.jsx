/** @format */

import { ImageDB_URL, MovieDB_URL, request } from 'fetcher';
import React from 'react';
import YouTube from 'react-youtube';
import { useRecoilValue } from 'recoil';
import { TRENDING_MOVIES_ATOM } from 'recoil/atoms';
import './index.scss';

const Banner = () => {
     const [currentTrendingIndex, setCurrentTrendingIndex] = React.useState(0);
     const trendingMovie = useRecoilValue(TRENDING_MOVIES_ATOM);
     const [currentKeyMovie, setCurrentKeyMovie] = React.useState();

     React.useEffect(() => {
          const trendingInterval = setInterval(() => {
               if (currentTrendingIndex <= trendingMovie.length - 5) setCurrentTrendingIndex((prevCurrentIndex) => prevCurrentIndex + 1);
               else setCurrentTrendingIndex(0);
          }, 5000);
          return () => clearInterval(trendingInterval);
     }, [currentTrendingIndex]);

     const youtubeHandler = async () => {
          const currentTrendingMovie = trendingMovie[currentTrendingIndex];
          const response = await request(MovieDB_URL(currentTrendingMovie.id));
          setCurrentKeyMovie(response?.results[0]?.key);
     };
     
     const resetYoutubeKey = () => setCurrentKeyMovie();
     const currentMovie = trendingMovie[currentTrendingIndex];
     if (currentKeyMovie) return <YouTube videoId={currentKeyMovie} className='youtube__video' onEnd={resetYoutubeKey} />;
     return (
          <div className='banner' onClick={youtubeHandler}>
               <p>
                    <img className='banner__image' src={ImageDB_URL(currentMovie.backdrop_path)} />
                    <div className='banner__content'>
                         <h1 className='banner__title'>{currentMovie.title}</h1>
                         <p className='banner__description'>{currentMovie.overview}</p>
                    </div>
               </p>
          </div>
     );
};

export default Banner;
