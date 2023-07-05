import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CARD_MENU_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/userRestaurentMenu";

const RestaurentMenu = () => {
    // const [resInfo, setResInfo] = useState([])
    const {resId} = useParams()
   
    const resInfo = useRestaurentMenu(resId)
    // useEffect(() => {
    //     fetchMenu()    
    // }, [])

    // const fetchMenu = async () => {
    //     console.log("menu fetching")
    //     const data = await fetch(
    //         CARD_MENU_URL + resId
    //     );
    //     const json = await data.json()
    //     console.log(json.data.cards)
    //     setResInfo(json.data.cards)
    // }

    if (resInfo?.length == 0) {
        return <Shimmer />
    }
    const {name, cuisines, costForTwoMessage} = resInfo[0]?.card?.card?.info
    const {itemCards} = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."} {item.card.info.price /100}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurentMenu;