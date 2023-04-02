import {CARDIMG_URL} from "../utils/constants";

const RestaurentCard = ({resData}) => {
    const {resName, cuisine, rating} = {...resData}
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo" 
                src={CARDIMG_URL} />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
        </div>
    )
}

export default RestaurentCard