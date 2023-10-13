import { AppProps } from 'next/app'
import React, { useEffect } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
