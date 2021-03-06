/** @format */

import ScrollChecker from 'components/scroll-checker';
import ActorsArchive from 'pages/actors-archive';
import ArchiveGenre from 'pages/archive-genre';
import Home from 'pages/home';
import SingleGenre from 'pages/single-genre';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GENRE_MOVIES_QUERY_ATOM, GENRE_MOVIE_ATOM, GENRE_TV_ATOM, GENRE_TV_QUERY_ATOM } from 'recoil/atoms';
import './index.scss';

export default () => {
     return (
          <RecoilRoot>
               <React.Suspense fallback={<p>Loading ...</p>}>
                    <Router>
                         <ScrollChecker>
                              <Switch>
                                   <Route path='/' exact component={Home} />
                                   <Route
                                        path='/movie'
                                        exact
                                        render={() => (
                                             <ArchiveGenre
                                                  title='Movie'
                                                  ATOM={GENRE_MOVIE_ATOM}
                                                  QUERY_ATOM={GENRE_MOVIES_QUERY_ATOM}
                                             />
                                        )}
                                   />
                                   <Route
                                        path='/tv'
                                        exact
                                        render={() => (
                                             <ArchiveGenre
                                                  title='Tv'
                                                  ATOM={GENRE_TV_ATOM}
                                                  QUERY_ATOM={GENRE_TV_QUERY_ATOM}
                                             />
                                        )}
                                   />
                                   <Route path='/genre/:id/:name/:type' exact component={SingleGenre} />
                                   <Route path='/actors-archive' exact component={ActorsArchive} />
                              </Switch>
                         </ScrollChecker>
                    </Router>
               </React.Suspense>
          </RecoilRoot>
     );
};
