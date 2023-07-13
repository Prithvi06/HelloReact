import RestaurentCard, {promotedRestaurentCard} from "./RestaurentCard"
import { useState, useEffect } from "react"
// import restaurentDataList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurentData, setRestaurentData] = useState([]);
    const [filterRestaurent, setFilterRestaurent] = useState([])
    const [searchText, setSearchText] = useState("")
    
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        setRestaurentData(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilterRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    // if (restaurentData.length === 0){
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus()
    const RestaurentCardPromoted = promotedRestaurentCard(RestaurentCard)

    if (onlineStatus === false) 
        return (
            <h1>You are offline, please check your internet connection</h1>
        )

    return restaurentData?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                    <button className="search-btn"
                    onClick={() => {
                        const filterRes = restaurentData.filter((res) => res.data.name.includes(searchText));
                        setFilterRestaurent(filterRes);
                        }} >Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        setFilterRestaurent(restaurentData.filter((res) => res?.data?.avgRating > 4))
                    }}>
                    Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
            {  
                filterRestaurent.map((restaurent) => (
                <Link to={"/restaurent/" + restaurent.data.id} key={restaurent.data.id}>
                    { restaurent.data.promoted ? <RestaurentCardPromoted resData={restaurent}/> : <RestaurentCard resData={restaurent} />}
                </Link>
                ))
            }    
            </div>
        </div>
    )
}

export default Body