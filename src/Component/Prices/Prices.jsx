import Price from "../Price/Price";

const Prices = () => {
  [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "One free fitness assessment",
        "Access to cardio equipment",
        "Free Wi-Fi",
        "Access to mobile app for tracking workouts",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "One free personal training session",
        "Access to group classes",
        "Access to cardio and strength equipment",
        "Free Wi-Fi",
        "Discount on select merchandise",
        "Guest passes (up to 2 per month)",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 70,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Two free personal training sessions",
        "Unlimited group classes",
        "Access to pool and sauna",
        "Access to advanced strength training equipment",
        "Priority class bookings",
        "Free fitness assessment and re-assessment",
        "Discounted access to nutrition seminars",
        "Bring a friend for free once a month",
      ],
    },
    {
      id: 4,
      name: "Elite",
      price: 100,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Weekly personal training sessions",
        "Unlimited group classes",
        "Access to pool, sauna, and spa",
        "Diet and nutrition consultation",
        "Exclusive access to VIP lounge",
        "Complimentary gym apparel",
        "Priority booking for classes and trainers",
        "Free access to monthly fitness workshops",
        "Family member discount",
      ],
    },
  ];

  return <div>
         <h2 className="text-5xl">Best Prices </h2>
      {
         
      }
      </div>;
};

export default Prices;
