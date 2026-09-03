import FoodSection from "../../components/food-section/food-section";
import SEO from "../../components/seo/SEO";
import "./restaurant.css";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://always-hotel.vercel.app/#restaurant",
      "name": "Always Hotel Restaurant & Bar",
      "image": "https://always-hotel.vercel.app/jollof.jpg",
      "url": "https://always-hotel.vercel.app/restaurant",
      "telephone": "+2348033886334",
      "priceRange": "₦500 - ₦3,500",
      "servesCuisine": ["Nigerian", "African", "Continental"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "82 Eastern Bye-Pass, Tudun Wada South",
        "addressLocality": "Minna",
        "addressRegion": "Niger State",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.6025849,
        "longitude": 6.5760774
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "07:00",
          "closes": "23:00"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://always-hotel.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Restaurant & Bar",
          "item": "https://always-hotel.vercel.app/restaurant"
        }
      ]
    }
  ]
};

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
      title: "Monster Energy",
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
      title: "Red Bull",
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
      <SEO
        title="Restaurant &amp; Bar Menu - Always Hotel Minna"
        description="Dine at Always Hotel Restaurant in Minna. Delicious Nigerian soups, Jollof rice, breakfasts, and chilled drinks served in Tudun Wada South, Minna."
        keywords="restaurant in minna, best food in minna, always hotel menu, swallow and soups minna, jollof rice minna niger state, bar in minna"
        canonicalPath="/restaurant"
        ogImage="/jollof.jpg"
        schema={restaurantSchema}
      />

      <div className="menu-heading">
        <h2>Restaurant &amp; Bar Menu</h2>
        <p>
          At Always Hotel, enjoy delicious local Nigerian delicacies and continental dishes 
          in a warm, inviting space — freshly prepared by experienced chefs.
        </p>
      </div>

      <FoodSection id="soups" title="Soups &amp; Swallow" items={soups} />
      <FoodSection id="breakfast" title="Breakfast" items={breakfast} />
      <FoodSection id="rice" title="Rice Dishes" items={rice} />
      <FoodSection id="drinks" title="Chilled Drinks &amp; Beverages" items={drinks} />
    </div>
  );
};

export default Menu;
