import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Updatebookingdate = () => {
  const { user } = useContext(AuthContext);
  const updatebooking = useLoaderData();
  // console.log(updatebooking)
  const {
    RoomName,
    pricePerNight,
    availability,
    specialOffers,
    dateofbook,
    _id,
  } = updatebooking;
  // console.log(updatebooking)

  const handelUpdateDate = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const dateofbook = form.get("dateofbook");
    // console.log(dateofbook);


    const data={
      dateofbook
    }
  
    axios
      .patch(`https://hotel-booking-server-topaz.vercel.app/bookings/${_id}`,
      data
      )
      .then((res) => {
      
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Date is Updated",
          showConfirmButton: false,
          timer: 2500
        });
      })
      .catch((err) => console.log("err", err));
  };
  

  return (
    <div>
      <h1 className="text-center font-bold text-3xl ">
        Please submit this from for booking
      </h1>
      <hr className="lg:w-[800px] w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <form onSubmit={handelUpdateDate} className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Room Name:</span>
            </label>
            <input
              type="text"
              name="roomname"
              defaultValue={RoomName}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price Per Night:</span>
            </label>
            <input
              type="text"
              name="pricePerNight"
              defaultValue={pricePerNight}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availabile Rooms:</span>
            </label>
            <input
              type="text"
              name="availability"
              defaultValue={availability}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Booking Date:</span>
            </label>
            <input
              type="date"
              name="dateofbook"
              defaultValue={dateofbook}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Special Offers:</span>
            </label>
            <input
              type="text"
              name="specialOffers"
              defaultValue={
                specialOffers
                  ? specialOffers
                  : "No offers avilablile for this room "
              }
              className="input input-bordered"
              required
              disabled
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Updatebookingdate;
