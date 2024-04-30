import './src/sass/style.scss';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './src/components/layout/layout';

export const wrapPageElement = ({ props, element }) => {
  return (
    <Layout {...props}>
      {element}
      <ToastContainer
        autoClose={7000}
        closeButton={false}
        position="bottom-right"
        hideProgressBar={true}
      />
    </Layout>
  );
};
