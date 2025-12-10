import Button from "../button/button";
import "./food-card.css";

const Foodcard = ({ imgSrc, title, category, price }) => {
    return (
        <div className="food-card">
                <img src={imgSrc} alt={title} className="food-image"/>
                <div className="food-details">
                        <h3>{title}</h3>
                        <p>{category}</p>
                        <span>{price}</span>
                </div>
                <Button label="Order Now" />
        </div>
    )
}

export default Foodcard;
