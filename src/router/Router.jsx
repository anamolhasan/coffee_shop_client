import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";


export const router = createBrowserRouter([
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