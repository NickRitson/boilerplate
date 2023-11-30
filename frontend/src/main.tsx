import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider  } from 'react-redux';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { store } from './redux/store';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './views/HomePage';
import GamePage from './views/GamesPage';
import TechStackPage from './views/TechStackPage';
import './styles/index.css';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container mx-auto py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tech-stack",
        element: <TechStackPage />,
      },
      {
        path: "/games",
        element: <GamePage />,
        loader: async () => {
          return fetch(`https://api.rawg.io/api/developers?key=${API_KEY}`);
        },
      },
      {
        path: "/playground",
        element: <div>Playground</div>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

/*
cypress + Jest
a/b testing
storybook/mddox
games need param on route to fetch single game data
auth via supabase + cdn
mock server + ds, tw services
add react-motion
*/
