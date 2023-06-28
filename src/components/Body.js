import RestaurentCard from "./RestaurentCard"
import { useState, useEffect } from "react"
// import restaurentDataList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    console.log("Body")
    const [restaurentData, setRestaurentData] = useState([]);
    const [filterRestaurent, setFilterRestaurent] = useState([])
    const [searchText, setSearchText] = useState("")
    
    
    useEffect(()=>{
        console.log("usereffect")
        fetchData();
    }, [])

    const fetchData = async() => {
        console.log("fetching data")
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
                        console.log(filterRestaurent)
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
            {console.log("filterRestaurent", filterRestaurent)}
            {  
                filterRestaurent.map((res) => (
                <Link to={"/restaurent/" + res.data.id} key={res.data.id}>
                    <RestaurentCard resData={res} />
                </Link>
                ))
            }    
            </div>
        </div>
    )
}

export default Body