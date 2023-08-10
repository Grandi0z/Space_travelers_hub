import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => (
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
  </div>
);

export default Root;
