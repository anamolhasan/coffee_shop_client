import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './page/Home/Home.jsx';
import AddCoffee from './page/coffees/addCoffee/AddCoffee.jsx';
import UpdateCoffee from './page/coffees/updateCoffee/UpdateCoffee.jsx';
import CoffeeDetails from './page/coffees/allCoffee/CoffeeDetails.jsx';
import SignIn from './page/register/SignIn.jsx';
import SignUp from './page/register/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        loader:()=> fetch(`${import.meta.env.VITE_API_URL}/coffees`),
        
        Component:Home
      },
      {
        path:'addCoffee',
        Component:AddCoffee
      },
      {
        path:'coffee/:id',
        Component:CoffeeDetails
      },
      {
        path:'updateCoffee/:id',
        Component:UpdateCoffee,
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/coffees/${params.id}`)
      },
      {
        path:'signIn',
        Component:SignIn
      },
      {
        path:'signUp',
        Component:SignUp
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
