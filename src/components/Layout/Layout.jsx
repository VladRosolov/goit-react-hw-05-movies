// import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
// import { BeatLoader } from 'react-spinners';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
