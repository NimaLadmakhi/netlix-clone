import * as React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollChecker = ({ children }) => {
     const { pathname } = useLocation();
     React.useEffect(() => {
          window.scrollTo({ top: 0 });
     }, [pathname]);
     return children;
};

export default ScrollChecker;
