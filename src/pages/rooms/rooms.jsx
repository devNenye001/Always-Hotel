import RoomCard from "../../components/room-card/room-card";
import './rooms.css'
const Rooms = () => {
  return (
    <div className='room-page'>
        <div className="room-page-heading">
            <h2>Rooms</h2>
            <p>Comfort, style, and peace — all in one place. At Always Hotel, each room is designed to give you a relaxing stay with modern amenities, cozy furnishings, and a clean, safe environment. Browse our rooms and find the perfect fit for your visit.</p>
        </div>
        <div className="rooms-group">
             <RoomCard
            title="Standard Room"
            price="₦12,000 per night"
            image="/room1.jpg"
            amenities={{
              ac: false,
              fan: true,
              tv: true,
              heater: false,
              light247: true,
            }}
          />
          <RoomCard
            title="Semi-Standard Room"
            price="₦20,000 per night"
            image="/room2.jpg"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />

          <RoomCard
            title="VIP Room"
            price="₦55,000 per night"
            image="/room4.png"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
        </div>
    </div>
  )
}

export default Rooms