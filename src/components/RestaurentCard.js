import {CARDIMG_URL} from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        deliveryTime,
        avgRating
    } = resData?.info

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo" 
                src={CARDIMG_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo / 100} For Two</h5>
            <h5>{deliveryTime} minutes</h5>
            <h5>{avgRating}</h5>
        </div>
    )
}


export const promotedRestaurentCard = (RestaurentCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg p-1">Promoted</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}


export default RestaurentCard