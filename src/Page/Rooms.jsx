import { useLoaderData } from "react-router-dom";
import RoomsCards from "./RoomsCards";

const Rooms = () => {
    const rooms =useLoaderData()
// console.log(rooms)

    return (
        <div className=" mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {
            rooms.map(room=><RoomsCards key={room._id} room={room} ></RoomsCards>)
         }
        </div>
    );
};

export default Rooms;