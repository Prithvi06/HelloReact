import RestaurentCard from "./RestaurentCard"
import { useState } from "react"
import restaurentDataList from "../utils/mockData";

const Body = () => {
    const [restaurentData, setRestaurentData] = useState(restaurentDataList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        setRestaurentData(restaurentData.filter((res) => res.rating >= 4.5))
                    }}>
                    Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
            {
                restaurentData.map((data) => (
                <RestaurentCard key={data.id} resData={data} />
                ))
            }    
            </div>
        </div>
    )
}

export default Body