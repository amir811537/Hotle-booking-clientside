import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/Login";
import Registation from "../Page/Registation";
import Rooms from "../Page/Rooms";
import MyBooking from "../Page/MyBooking";
import RooomDetails from "../Page/RooomDetails";
import Home from "../Page/Home";
import Finalcheckout from "../Page/Finalcheckout";
import PrivateRoute from "./PrivateRoute";
import Updatebookingdate from "../Page/Updatebookingdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      { path: "/",
      element:<Home></Home>,
      loader: () => fetch("http://localhost:5000/rooms"),

      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "mybooking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      },

      {
        path:"/RoomDetails/:id",
        element:<RooomDetails></RooomDetails>,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element:<Finalcheckout></Finalcheckout>,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)

      },
      {
        path:'/updatebooking/:id',
        element:<Updatebookingdate></Updatebookingdate>,
        loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
      }
   
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
