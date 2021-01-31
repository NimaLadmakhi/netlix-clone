/** @format */

import Home from 'pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.scss';

export default () => {
     return (
          <RecoilRoot>
               <React.Suspense fallback={<p>Loading ...</p>}>
                    <Router>
                         <Switch>
                              <Route path='/' component={Home} />
                         </Switch>
                    </Router>
               </React.Suspense>
          </RecoilRoot>
     );
};
