import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./routes/home"
import ListeRestaurants from "./routes/listerestaurants"
import RestaurantDetails from "./routes/restaurant-detail";
import Navbar from "./components/navbar/navbar";
import CreateRestaurant from "./routes/createrestaurant"
import Aboutus from "./routes/aboutus";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children : [
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/restaurants",
          element : <ListeRestaurants/>,
        },
        {
          path: '/restaurant-details/:id',
          element : <RestaurantDetails/>,
        },
        {
          path: '/creer-restaurant',
          element: <CreateRestaurant/>
        },
        {
          path:'/a-propos-de-nous',
          element : <Aboutus/>
        }
      ]
    },
  ]);


  export default router;