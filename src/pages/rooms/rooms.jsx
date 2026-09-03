import RoomCard from "../../components/room-card/room-card";
import SEO from "../../components/seo/SEO";
import "./rooms.css";

const roomsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://always-hotel.vercel.app/#hotel",
      "name": "Always Hotel Minna",
      "url": "https://always-hotel.vercel.app/rooms"
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "HotelRoom",
          "position": 1,
          "name": "Standard Room",
          "description": "Comfortable room with fan, satellite TV, 24/7 power, and cozy bedding in Minna.",
          "offers": {
            "@type": "Offer",
            "price": "18500",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 2,
          "name": "Super-Standard Room",
          "description": "Air-conditioned room with heater, flat screen TV, 24/7 power, and plush furnishings.",
          "offers": {
            "@type": "Offer",
            "price": "20600",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 3,
          "name": "Royal Standard Room",
          "description": "Upgraded royal standard suite with split AC, hot water heater, 24/7 electricity, and premium amenities.",
          "offers": {
            "@type": "Offer",
            "price": "25800",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 4,
          "name": "VIP Room",
          "description": "Spacious VIP luxury accommodation with full air-conditioning, premium bathroom, and dedicated room service.",
          "offers": {
            "@type": "Offer",
            "price": "28700",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 5,
          "name": "Bridal Shower Room",
          "description": "Specially prepared luxury bridal suite designed for weddings, bridal celebrations, and romantic getaways.",
          "offers": {
            "@type": "Offer",
            "price": "35500",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 6,
          "name": "Executive Suite Room",
          "description": "Grand executive suite featuring private lounge area, executive work desk, chilled AC, and premium bed.",
          "offers": {
            "@type": "Offer",
            "price": "50600",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "HotelRoom",
          "position": 7,
          "name": "Executive Royal Room",
          "description": "The pinnacle of luxury in Minna. Expansive royal suite with top-tier appointments, 24/7 power, and VIP care.",
          "offers": {
            "@type": "Offer",
            "price": "60900",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
          }
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
          "name": "Rooms",
          "item": "https://always-hotel.vercel.app/rooms"
        }
      ]
    }
  ]
};

const Rooms = () => {
  return (
    <div className="room-page">
      <SEO
        title="Rooms &amp; Suites Rates - Always Hotel Minna"
        description="Browse rooms and rates at Always Hotel Minna. Standard, Super-Standard, Royal, VIP, Bridal Shower, and Executive Suites with 24/7 power, AC, and room service."
        keywords="hotel rooms in minna, always hotel room prices, executive suite minna, cheap luxury rooms minna, accommodation rates minna niger state"
        canonicalPath="/rooms"
        ogImage="/room4.png"
        schema={roomsSchema}
      />

      <div className="room-page-heading">
        <h2>Our Rooms &amp; Suites</h2>
        <p>
          Comfort, style, and peace — all in one place. At Always Hotel Minna, each room 
          is carefully appointed with modern amenities, cozy furnishings, 24/7 power supply, 
          and a sanitized, secure environment. Find the perfect fit for your visit.
        </p>
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
            ac: true,
            fan: false,
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
  );
};

export default Rooms;