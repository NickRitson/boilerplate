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
import './styles/index.css'; 

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

console.log(`https://api.rawg.io/api/developers?key=${process.env.REACT_APP_RAWG_API_KEY}`)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/techstack",
        element: <div>Tech In Boilerplate</div>,
      },
      {
        path: "/games",
        element: <GamePage />,
        loader: async () => {
          return fetch(`https://api.rawg.io/api/developers?key=${process.env.REACT_APP_RAWG_API_KEY}`);
        },
      },
      {
        path: "/playground",
        element: <div>Tech In Boilerplate</div>,
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

*/
