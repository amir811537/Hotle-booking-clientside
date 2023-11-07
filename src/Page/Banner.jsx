import { Link } from "react-router-dom";

const Banner = () => {
  return (
    //     <!--
    //     Heads up! 👋

    //     This component comes with some `rtl` classNamees. Please remove them if they are not needed in your project.
    //   -->

    <div className="py-10">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="w-full rounded-xl"
          />
          <div className="absolute flex items-center rounded-xl h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className=" text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className="  btn btn-primary mr-5 ">
                  Discover More
                </button>
               <Link to="/rooms">
               
               
               <button  className="btn btn-outline btn-secondary">
                  Latest Rooms
                </button>

               </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-xl"
          />

          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className="text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className=" btn btn-primary mr-5 ">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-xl "
          />

          <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className="text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className=" btn btn-primary mr-5 ">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-xl"
          />

          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl  bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className="text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className=" btn btn-primary mr-5 ">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-xl"
          />

          <div className="absolute flex items-center h-full left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className="text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className=" btn btn-primary mr-5 ">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="carousel-item relative w-full h-[600px] md:h-auto md:max-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1630660664869-c9d3cc676880?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-xl"
          />

          <div className="absolute flex items-center h-full left-0 top-0 rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white  lg:space-y-7 lg:w-1/3  text-center lg:pl-12">
              <h1 className="text-xl lg:text-5xl font-extrabold ">
                Save 15% with Late Escape Deals
              </h1>
              <p className="font-bold">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="lg:flex py-4">
                <button className=" btn btn-primary mr-5 ">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
