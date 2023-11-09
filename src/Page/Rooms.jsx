import { useLoaderData } from "react-router-dom";
import RoomsCards from "./RoomsCards";
import { useEffect, useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();

  const [showAllRooms, setShowAllRooms] = useState(false);
  const [sortedRooms, setSortedRooms] = useState([...rooms]);
  const [sortOrder, setSortOrder] = useState("All");
  const initialRoomsToShow = 6;

  // Sort rooms based on price when sortOrder changes
  useEffect(() => {
    if (sortOrder === "lowtohigh") {
      setSortedRooms([...rooms].sort((a, b) => a.pricePerNight - b.pricePerNight));
    } else if (sortOrder === "hightolow") {
      setSortedRooms([...rooms].sort((a, b) => b.pricePerNight - a.pricePerNight));
    } else {
      setSortedRooms([...rooms]);
    }
  }, [sortOrder, rooms]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const toggleRoomsDisplay = () => {
    setShowAllRooms(!showAllRooms);
  };

  const displayedRooms = showAllRooms ? sortedRooms : sortedRooms.slice(0, initialRoomsToShow);

  return (
    <div>
      <form className="mx-auto flex items-center gap-3 py-10 justify-end max-w-[1200px]">

      < div className="bg-sky-500 h-10 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Your budget</div>
        <select
          id="pricingType"
          name="pricingType"
          className="w-28 h-10 border-2 border-sky-500 focus:outline-none focus-border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="All">All</option>
          <option value="lowtohigh">Low to high</option>
          <option value="hightolow">High to low</option>
        </select>
      </form>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedRooms.map((room) => (
          <RoomsCards key={room._id} room={room}></RoomsCards>
        ))}
      </div>
      

      {sortedRooms.length > initialRoomsToShow && (
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={toggleRoomsDisplay}
          >
            {showAllRooms ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Rooms;
