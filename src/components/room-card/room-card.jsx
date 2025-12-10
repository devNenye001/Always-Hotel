
import { FaTv, FaBolt, FaFan } from "react-icons/fa";
import { MdAcUnit, MdOutlineFireplace } from "react-icons/md";
import "./room-card.css";
import Button from "../button/button";

const RoomCard = ({
  title,
  price,
  image,
  amenities = {
    ac: false,
    fan: false,
    tv: false,
    heater: false,
    light247: false,
  },
}) => {
  return (
    <div className="room-card">
      <img src={image} alt={title} className="room-photo" />

      <h3 className="room-title">{title}</h3>
      <p className="room-price">{price}</p>

      <div className="amenities">
        {amenities.ac && (
          <span className="amenity">
            <MdAcUnit /> AC
          </span>
        )}
        {amenities.fan && (
          <span className="amenity">
            <FaFan /> Fan
          </span>
        )}
        {amenities.tv && (
          <span className="amenity">
            <FaTv /> TV
          </span>
        )}
        {amenities.heater && (
          <span className="amenity">
            <MdOutlineFireplace /> Heater
          </span>
        )}
        {amenities.light247 && (
          <span className="amenity">
            <FaBolt /> 24/7
          </span>
        )}
      </div>

      <Button label="Book Now"/>
    </div>
  );
};

export default RoomCard;
