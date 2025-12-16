import Button from "../button/button";
import "./food-card.css";

const Foodcard = ({ imgSrc, title, category, price }) => {
  const phoneNumber = "2349010200843"; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="food-card">
      <img src={imgSrc} alt={title} className="food-image" />
      <div className="food-details">
        <h3>{title}</h3>
        <p>{category}</p>
        <span>{price}</span>
      </div>
      <Button onClick={openWhatsApp} label="Order Now" />
    </div>
  );
};

export default Foodcard;
