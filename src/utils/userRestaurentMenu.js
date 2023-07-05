import { useEffect } from "react";
import { CARD_MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState([])
        
    useEffect(() => {
        fetchMenuData()
    }, []);

    const fetchMenuData = async() => {
        const data = await fetch(
            CARD_MENU_URL + resId
        );
        const json =  await data.json()
        setResInfo(json.data.cards)
    }

    return resInfo;
}

export default useRestaurentMenu