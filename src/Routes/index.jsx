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
import ErrorPage from "../Page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [

      { path: "/",
      element:<Home></Home>,
      loader: () => fetch("https://hotel-booking-server-topaz.vercel.app/rooms"),

      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("https://hotel-booking-server-topaz.vercel.app/rooms"),
      },
      {
        path: "mybooking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      },

      {
        path:"/RoomDetails/:id",
        element:<RooomDetails></RooomDetails>,
        loader:({params})=>fetch(`https://hotel-booking-server-topaz.vercel.app/rooms/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element:<PrivateRoute><Finalcheckout></Finalcheckout></PrivateRoute>,
        loader:({params})=>fetch(`https://hotel-booking-server-topaz.vercel.app/rooms/${params.id}`)

      },
      {
        path:'/updatebooking/:id',
        element:<Updatebookingdate></Updatebookingdate>,
        loader:({params})=>fetch(`https://hotel-booking-server-topaz.vercel.app/bookings/${params.id}`)
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
