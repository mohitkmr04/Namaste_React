import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 - Logo
 - Nav Items
Body
 - Search
 - RestaurantContainer
 - RestaurantCard
    -Img
    -Name of Restro
    -Rating, Cuisine, Delivery time
Footer
 - Copyright
 - Links
 - Address
 - Contact
*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resData;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

const resList = {
  "restaurants": [
    {
      "id": "151648",
      "name": "Mr. Gurung Momo & Chinese Corner",
      "location": "Teacher's Colony, Mohan Nagar",
      "costForTwo": "₹150",
      "cuisines": ["Momos", "Chinese", "Fast Food"],
      "rating": {
        "avgRating": 4.3,
        "totalRatings": "1.0K+"
      },
      "deliveryTime": "45-50 mins",
      "distance": "11.8 km",
      "isOpen": true,
      "nextCloseTime": "2025-01-27 23:00:00",
      "veg": true,
      "specialBadge": "Pure Veg",
      "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
      "orderLink": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648"
    },
    {
      "id": "658210",
      "name": "The Fusion Lounge",
      "location": "Triloki Nagar, Railway Station",
      "costForTwo": "₹300",
      "cuisines": ["North Indian", "South Indian", "Chinese", "Beverages", "Fast Food", "Desserts"],
      "rating": {
        "avgRating": 4.1,
        "totalRatings": "302"
      },
      "deliveryTime": "55-60 mins",
      "distance": "10.2 km",
      "isOpen": true,
      "nextCloseTime": "2025-01-27 23:00:00",
      "veg": false,
      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      "orderLink": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210"
    },
    {
      "id": "151518",
      "name": "Bakery World",
      "location": "Parasia Road, Parasia Road Area",
      "costForTwo": "₹250",
      "cuisines": ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      "rating": {
        "avgRating": 4.6,
        "totalRatings": "252"
      },
      "deliveryTime": "40-45 mins",
      "distance": "11.7 km",
      "isOpen": true,
      "nextCloseTime": "2025-01-27 22:30:00",
      "veg": true,
      "specialBadge": "Pure Veg",
      "cloudinaryImageId": "mt2aggiscfl3yviatwng",
      "orderLink": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518"
    },
    {
      "id": "234875",
      "name": "Adil Hotel",
      "location": "Rautha Wada, Chhindwara Locality",
      "costForTwo": "₹150",
      "cuisines": ["North Indian", "Biryani", "Tandoor"],
      "rating": {
        "avgRating": 4.3,
        "totalRatings": "1.1K+"
      },
      "deliveryTime": "40-45 mins",
      "distance": "10.8 km",
      "isOpen": true,
      "nextCloseTime": "2025-01-27 23:00:00",
      "veg": false,
      "specialOffer": "Items starting at ₹129",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "orderLink": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875"
    },
    {
      "id": "150591",
      "name": "Satkar Restaurant",
      "location": "Sinchai Colony, Satkar Chowk",
      "costForTwo": "₹250",
      "cuisines": ["North Indian", "South Indian", "Indian", "Salads", "Desserts"],
      "rating": {
        "avgRating": 4.3,
        "totalRatings": "2.4K+"
      },
      "deliveryTime": "45-50 mins",
      "distance": "13.0 km",
      "isOpen": true,
      "nextCloseTime": "2025-01-27 22:45:00",
      "veg": true,
      "specialBadge": "Pure Veg",
      "specialOffer": "Items starting at ₹49",
      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
      "orderLink": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591"
    }
  ]
}
console.log(typeof(resList))
console.log(typeof(RestaurantCard))


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {
                resList.restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
              ))}
              
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    );
};

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

