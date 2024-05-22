import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"; 
import Home from './page/Home';
import Error from './page/Error'
import Habitat from './page/Habitat';
import Service from './page/Service';
import Contact from './page/Contact';
import Connexion from './page/Admin/Connexion';
import JunglePage from './page/Habitat/jungle';
import SavanePage from './page/Habitat/savane';
import MaraisPage from './page/Habitat/marais';
import AnimalSavane from './page/Habitat/animalSavane';
import AnimalMarais from './page/Habitat/animalMarais';
import AnimalJungle from './page/Habitat/animalJungle';
import FormComment from './page/FormComment';
import Dashboard from './page/Admin/Dashboard';
import DashboardAnimaux from './page/Admin/dashboard/animaux';
import DashboardHome from './page/Admin/dashboard/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/service",
    element: (
      <Service/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/habitat",
    element: (
      <Habitat/>
    ),
    errorElement: <Error/>,
  },
  {
    path: "/habitat/savane",
    element: (
      <SavanePage/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/habitat/savane/:id",
    element: (
      <AnimalSavane/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/habitat/jungle/:id",
    element: (
      <AnimalJungle/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/habitat/marais/:id",
    element: (
      <AnimalMarais/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/habitat/jungle",
    element: (
      <JunglePage/>
    ),
    errorElement: <Error/>
  },

  {
    path: "/habitat/marais",
    element: (
      <MaraisPage/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/contact",
    element: (
      <Contact/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/comment",
    element: (
      <FormComment/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/connexion",
    element: (
      <Connexion/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard/>
    ),
    errorElement: <Error/>
  },
  {
    path: "/dashboard/home",
    element: (
      <DashboardHome/>
    ),
    errorElement: <Error/>
  },

  {
    path: "/dashboard/animaux",
    element: (
      <DashboardAnimaux/>
    ),
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
