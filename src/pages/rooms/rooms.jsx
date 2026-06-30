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
            price="₦18,500 per night"
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
            title="Super-Standard Room"
            price="₦20,600 per night"
            image="/room2.jpg"
            amenities={{
              ac: false,
              fan: true,
              tv: true,
              heater: true,
              light247: true,
            }}
          />

          <RoomCard
            title="Royal Standard Room"
            price="₦25,800 per night"
            image="/room4.png"
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
            price="₦28,700 per night"
            image="/room6.jpg"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
           <RoomCard
            title="Bridal Shower Room"
            price="₦35,500 per night"
            image="/room5.jpg"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
           <RoomCard
            title="Executive Suit Room"
            price="₦50,600 per night"
            image="/room8.jpg"
            amenities={{
              ac: true,
              fan: false,
              tv: true,
              heater: true,
              light247: true,
            }}
          />
           <RoomCard
            title="Executive Royal Room"
            price="₦60,900 per night"
            image="/room9.jpg"
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