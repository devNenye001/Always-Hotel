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
  const phoneNumber = "2348033886334"; // Nigeria country code +234

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

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

      <Button onClick={openWhatsApp} label="Book Now" />
    </div>
  );
};

export default RoomCard;