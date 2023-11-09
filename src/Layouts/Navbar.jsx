import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";

const Navbar = () => {
  const {user}=useContext(AuthContext);




    return (
        <div>
             <NavLink
                className={({ isActive }) =>
                  isActive ? "btn bg-[#ED8323] text-white btn-sm" : "btn btn-ghost btn-sm"
                }
                to="/rooms"
              >
                Rooms
              </NavLink>

           {
            user?.email?    <NavLink
            className={({ isActive }) =>
              isActive ? "btn  text-white bg-[#ED8323] btn-sm" : "btn btn-ghost btn-sm"
            }
            to="/mybooking"
          >
            My Booking
          </NavLink>:   <NavLink
                className={({ isActive }) =>
                  isActive ? "btn  text-white bg-[#ED8323] btn-sm" : "btn btn-ghost btn-sm"
                }
                to="/login"
              >
                Login
              </NavLink>
           }

           

              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn  text-white bg-[#ED8323] btn-sm" : "btn btn-ghost btn-sm"
                }
                to="/Register"
              >
                Registration
              </NavLink>
        </div>
    );
};

export default Navbar;