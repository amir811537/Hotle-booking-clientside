import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import Singelbookdata from "./Singelbookdata";
import Swal from "sweetalert2";
import axios from "axios";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://hotel-booking-server-topaz.vercel.app/bookings?email=${user.email}`;
  useEffect(() => {

    axios.get(url,{withCredentials:true})
    .then(res=>{
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, []);

  const handelCencel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hotel-booking-server-topaz.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been canceled.",
                "success"
              );
              const remaining =bookings.filter(booking=>booking._id==id);
              setBookings(remaining)
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while canceling the booking.",
              "error"
            );
          });
      }
    });
  };



  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {bookings.map((singelbooking) => (
        <Singelbookdata
          key={bookings._id}
          singelbooking={singelbooking}
          handelCencel={handelCencel}
        ></Singelbookdata>
      ))}
    </div>
  );
};

export default MyBooking;
