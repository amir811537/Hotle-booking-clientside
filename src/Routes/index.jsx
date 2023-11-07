import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/Login";
import Registation from "../Page/Registation";
import Rooms from "../Page/Rooms";
import MyBooking from "../Page/MyBooking";
import RooomDetails from "../Page/RooomDetails";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      { path: "/",
      element:<Home></Home>

      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "mybooking",
        element: <MyBooking></MyBooking>,
      },

      {
        path:"/RoomDetails/:id",
        element:<RooomDetails></RooomDetails>,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
      },
   
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registation></Registation>,
  },
]);
export default router;
