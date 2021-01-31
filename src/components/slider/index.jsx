/** @format */

import React from 'react';
import { useRecoilValue } from 'recoil';
import './index.scss';

const Slider = ({ ATOM }) => {
     const state = useRecoilValue(ATOM);
     return (
          <div>
               <h1>Slider</h1>
               {/* {JSON.stringify(state)} */}
          </div>
     );
};

export default Slider;
