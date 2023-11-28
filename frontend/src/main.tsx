import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Homepage from './views/Homepage';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: async () => {
      return fetch(`https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=20&page=1&key=619ef6468767436f828ec41fb7e9c17d`);
    },
  },
  {
    path: "/techstack",
    element: <div>Tech In Boilerplate</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
cypress + Jest

*/