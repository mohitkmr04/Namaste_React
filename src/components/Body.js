import RestaurantCard from "./RestaurantCard.js" 
import { useEffect, useState} from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {

  // Local State Variable - Super powerful variable
  const [listOfRestaurants,setListOfRestraunts] = useState([]);
  const [filteredRestraunt,setFilteredRestraunt] = useState([]);
  console.log(listOfRestaurants)
  const [searchText,setSearchText] = useState("");
  // console.log(searchText)



  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json.data.cards[4]);

    //Optional Chanining
    setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants.length===0){
    return <Shimmer/>
  }


  return listOfRestaurants.length === 0? <Shimmer/>:(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input
                 type="text"
                 className="search-box" 
                 value={searchText} 
                 onChange={(e) => {
                  setSearchText(e.target.value);
                 }}
                 />
                <button onClick = {()=> {
                  // Filter the restraunt cards and update the UI
                  //searchText
                  console.log(searchText);

                  const filteredRestraunt = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );

                  setFilteredRestraunt(filteredRestraunt); 
                }}>Search</button>
              </div>
              <button className="filter-btn"
              onClick={()=>{
                let filteredList = listOfRestaurants = listOfRestaurants.filter(
                  (res) => res.rating.avgRating>4.2
                );
                setLisOfRestraunts(filteredList);
              }}
              >
              Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                filteredRestraunt.map((restaurant) => {
                return <RestaurantCard key={restaurant.id} resData={restaurant}/>
              })}
              
            </div>
        </div>
    );
};

export default Body;

