import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { SiHotelsdotcom } from 'react-icons/si';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";


/* eslint-disable react/prop-types */
const Mainlayout = ({ children }) => {


  const{user,logout}=useContext(AuthContext);

  const handelsignout =()=>{
    logout()
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.error(error)
    })
      }



  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
       <div className=" w-full max-w-[1200px] mx-auto">
       <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* <div className="flex-1 px-2 mx-2">Navbar</div> */}
          <div className="text-xl font-bold">HotelHaven</div>
      <div className="flex-1 px-2 mx-2">
      <SiHotelsdotcom className="text-3xl"></SiHotelsdotcom></div>
      
          <div className="flex-none hidden lg:block">
            <div className="flex gap-2 items-center">
              {/* Navbar menu content here */}

             <Navbar></Navbar>


             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? (
              <img src={user.photoURL} />
            ) : (
              <img src="https://i.ibb.co/gjNbZy2/user.png" />
            )}
          </div>
        </label>
        {/* {console.log("user===========>", user)} */}
        {user ? (
          <button className="text-white btn btn-outline btn-warning" onClick={handelsignout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="text-white btn btn-outline btn-warning">Login</button>
          </Link>
        )}

            </div>
          </div>
       </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}


          <div  className="btn btn-ghost avatar">
          <div className="w-12 rounded-full">
            {user ? (
              <img src={user.photoURL} />
            ) : (
              <img src="https://i.ibb.co/gjNbZy2/user.png" />
            )}
          </div>
        </div>
       <button>
{
  user? <p className="text-sm font-bold text-red-500">{user.email}</p> :  <NavLink
  className={({ isActive }) =>
    isActive ? "btn  text-white bg-[#ED8323]" : "btn btn-ghost"
  }
  to="/login"
>
  Login
</NavLink>
}

       </button>

 
      
          
          <NavLink
                className={({ isActive }) =>
                  isActive ? "btn  text-white bg-[#ED8323]" : "btn btn-ghost "
                }
                to="/Rooms"
              >
                Rooms
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn  text-white bg-[#ED8323] " : "btn btn-ghost "
                }
                to="/mybooking"
              >
                My Booking
              </NavLink>



      

           {!user?.email?<>
          
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn  text-white bg-[#ED8323]" : "btn btn-ghost "
                }
                to="/Register"
              >
                Registration
              </NavLink></>:null}


              {user ? (
          <button className="btn text-white bg-[#ED8323]" onClick={handelsignout}>
            Sign Out
          </button>
        ) : (
       null
        )}
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
