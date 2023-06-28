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
    } = resData?.data

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

export default RestaurentCard