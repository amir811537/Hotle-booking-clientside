import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";

const Finalcheckout = () => {
  const { user } = useContext(AuthContext);
  const checkoutdata = useLoaderData();
  // console.log(checkoutdata);

  const handelformsubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const RoomName = form.get("roomname");
    const pricePerNight = form.get("pricePerNight");
    const availability = form.get("availability");
    const email = form.get("email");
    const dateofbook = form.get("dateofbook");
    const specialOffers = form.get("specialOffers");
    // console.log(name,pricePerNight,availability,email,dateofbook,specialOffers)

    const booking = {
      email: email,
      RoomName,
      dateofbook,

      booking_id: _id,
      pricePerNight,
      availability,
      specialOffers,
      images,
      reviews,
      roomSize,
    };
    // console.log(order)
    fetch("https://hotel-booking-server-topaz.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          const message = `Thank you for booking!\nRoom Name: ${RoomName}\nPrice: ${pricePerNight}\nRoom Size: ${roomSize}`;
          Swal.fire({
            title: "Booking Successful!",
            text: message,
            imageUrl: images[0],
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          
        }
      });
  };

  const {
    name,
    _id,
    availability,
    images,
    pricePerNight,
    reviews,
    roomSize,
    specialOffers,
  } = checkoutdata;

  // console.log(checkoutdata);
  // console.log(user?.email)
  return (
    <div>
      <h1 className="text-center font-bold text-3xl ">
        Please submit this from for booking
      </h1>
      <hr className="lg:w-[800px] w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <form onSubmit={handelformsubmit} className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Room Name:</span>
            </label>
            <input
              type="text"
              name="roomname"
              defaultValue={name}
              className="input input-bordered"
             required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price Per Night:</span>
            </label>
            <input
              type="text"
              name="pricePerNight"
              defaultValue={"$" + pricePerNight}
              placeholder="password"
              className="input input-bordered"
             required
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
              defaultValue={ user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Booking Date:</span>
            </label>
            <input
              type="date"
              name="dateofbook"
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

export default Finalcheckout;