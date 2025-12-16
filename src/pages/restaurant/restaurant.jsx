import FoodSection from "../../components/food-section/food-section";
import "./restaurant.css";

const Menu = () => {
  const soups = [
    {
      imgSrc: "/vegetable-soup.jpg",
      title: "Vegetable Soup",
      category: "Soup & Swallow",
      price: "₦2200",
    },
    {
      imgSrc: "/egusi.jpg",
      title: "Egusi Soup",
      category: "Soup & Swallow",
      price: "₦2200",
    },
    {
      imgSrc: "/oha.jpg",
      title: "Oha Soup",
      category: "Soup & Swallow",
      price: "₦2500",
    },
    {
      imgSrc: "/okra-soup.jpg",
      title: "Okra Soup",
      category: "Soup & Swallow",
      price: "₦2500",
    },
  ];
  const breakfast = [
    {
      imgSrc: "/indomie-egg.jpg",
      title: "Indomie and Egg",
      category: "Breakfast",
      price: "₦2500",
    },
    {
      imgSrc: "/bread-egg-tea.jpg",
      title: "Bread and Egg with Tea",
      category: "Breakfast",
      price: "₦2200",
    },
    {
      imgSrc: "/plantain-egg.jpg",
      title: "Plantain and Egg",
      category: "Breakfast",
      price: "₦3000",
    },
    {
      imgSrc: "/yam-egg.jpg",
      title: "Yam and Egg sauce",
      category: "Breakfast",
      price: "₦2600",
    },
  ];

  const rice = [
    {
      imgSrc: "/jollof-rice.jpg",
      title: "Jollof Rice",
      category: "Rice Dishes",
      price: "₦1200",
    },
    {
      imgSrc: "/white-rice-stew.jpg",
      title: "White Rice & Stew",
      category: "Rice Dishes",
      price: "₦1500",
    },
    {
      imgSrc: "/fried-rice.jpg",
      title: "Fried Rice",
      category: "Rice Dishes",
      price: "₦1700",
    },
    {
      imgSrc: "/ofada-rice.jpg",
      title: "Ofada Rice",
      category: "Rice Dishes",
      price: "₦3000",
    },
  ];

  const drinks = [
    {
      imgSrc: "/water.jpg",
      title: "Water",
      category: "Drinks",
      price: "₦500",
    },
    {
      imgSrc: "/heineken1.jpg",
      title: "Heineken",
      category: "Drinks",
      price: "₦2500",
    },
    {
      imgSrc: "/hollandia.jpg",
      title: "Hollandia Yogurt",
      category: "Drinks",
      price: "₦1200",
    },
    {
      imgSrc: "/malt.jpg",
      title: "Malt",
      category: "Drinks",
      price: "₦1200",
    },
    {
      imgSrc: "/sprite.jpg",
      title: "Sprite",
      category: "Drinks",
      price: "₦600",
    },
    {
      imgSrc: "/coke.jpg",
      title: "Coke",
      category: "Drinks",
      price: "₦600",
    },
    {
      imgSrc: "/monster.jpg",
      title: "Monster",
      category: "Drinks",
      price: "₦1500",
    },
    {
      imgSrc: "/fanta.jpg",
      title: "Fanta",
      category: "Drinks",
      price: "₦600",
    },
    {
      imgSrc: "/redbull.jpg",
      title: "Redbull",
      category: "Drinks",
      price: "₦900",
    },
    {
      imgSrc: "/pepsi.jpg",
      title: "Pepsi",
      category: "Drinks",
      price: "₦600",
    },
  ];

  return (
    <div className="menu-container">
      <div className="menu-heading">
        <h2>Restaurant</h2>
        <p>
          At Always Hotel, enjoy delicious local and continental dishes in a
          warm, inviting space — perfect for any meal or quick bite.
        </p>
      </div>

      <FoodSection id="soups" title="Soups & Swallow" items={soups} />
      <FoodSection id="breakfast" title="Breakfast" items={breakfast} />
      <FoodSection id="rice" title="Rice Dishes" items={rice} />
      <FoodSection id="drinks" title="Drinks" items={drinks} />
    </div>
  );
};

export default Menu;
