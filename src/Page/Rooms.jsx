import { useLoaderData } from "react-router-dom";
import RoomsCards from "./RoomsCards";
import { useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();

  // console.log(rooms)

  return (
    <div>
      <form className="mx-auto flex py-10 justify-end max-w-[1200px]">
        <select
          id="pricingType"
          name="pricingType"
          className="w-28 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            All
          </option>
          <option value="lowtohigh">Low to high</option>
          <option value="hightolow">High to low</option>
        </select>
      </form>

      <div className=" mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <RoomsCards key={room._id} room={room}></RoomsCards>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
