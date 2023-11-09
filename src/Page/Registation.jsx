import { useContext } from "react";
import { SiHotelsdotcom } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";
const Registation = () => {

const {createUser}=useContext(AuthContext);

    



const handelregister=(event)=>{
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // const name = form.get("name");
// console.log(email,password,name)
createUser(email,password)
.then(result=>{
    const user =result.user;
        Swal.fire({
          icon: "success",
          title: "registation success",
          showConfirmButton: false,
          timer: 3000,
        });
      
})
.then (error =>{
    console.log(error)
})
}

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/2dh57mf/bwink-bld-03-single-03.jpg')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center">
            <SiHotelsdotcom className="text-5xl  text-gray-700"></SiHotelsdotcom>
          </div>

          <form onSubmit={handelregister} >
            <div className="mt-4  font-bold text-2xl flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                Sign in or create an account
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                className="bg-gray-200 text-gray-700
                 focus:outline-none focus:shadow-outline border border-gray-300
                  rounded py-2 px-4 block w-full appearance-none"
                type="text" placeholder="Your name" name="name"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email" placeholder="email" name="email" required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password" placeholder="password" name="password"
              />
            </div>
            <div className="mt-8">
              <input
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                type="submit"
                value="Register"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/login" className="text-xs text-gray-500 uppercase">
              have an account please{" "}
              <span className="text-base font-bold">Login!</span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
