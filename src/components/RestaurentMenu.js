import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CARD_MENU_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/userRestaurentMenu";
import Category from "./Category";

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
    // const {itemCards} = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const category = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const categoryList = category.filter((c) => (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ))
    console.log("Categorylist", categoryList)
    return (
        <div className="text-center">
            <h1 className="text-lg font-bold my-5">{name}</h1>
            {
                categoryList.map((c) => (
                    <Category key={c?.card?.card?.title} data={c?.card?.card}/>
                    )
                )
            }

        </div>
    )
}

export default RestaurentMenu;