import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import AddCoffee from "../page/coffees/addCoffee/AddCoffee";
import CoffeeDetails from "../page/coffees/allCoffee/CoffeeDetails";
import UpdateCoffee from "../page/coffees/updateCoffee/UpdateCoffee";
import SignIn from "../page/register/SignIn";
import SignUp from "../page/register/SignUp";
import Loading from "../components/Loading";
import Users from "../page/users/Users";
import Users2 from "../page/users/Users2";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        // loader:()=> fetch(`${import.meta.env.VITE_API_URL}/coffees`),
        hydrateFallbackElement: <Loading />,
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
        // loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/coffees/${params.id}`),
        hydrateFallbackElement: <Loading />
      },
      {
        path:'signIn',
        Component:SignIn
      },
      {
        path:'signUp',
        Component:SignUp
      },
      // {
      //   path:'users',
      //   loader:()=> fetch(`${import.meta.env.VITE_API_URL}/users`),
      //   hydrateFallbackElement: <Loading />,
      //   Component:Users
      // },
      // {
      //   path:'users2',
      //   loader:()=> fetch(`${import.meta.env.VITE_API_URL}/users`),
      //   hydrateFallbackElement: <Loading />,
      //   Component:Users2
      // },
    ]
  },
]);