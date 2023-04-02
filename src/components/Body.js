import RestaurentCard from "./RestaurentCard"

const Body = () => {
    let RestaurentData = [
        {
            "id": 1,
            "resName": "Meghana Food",
            "cuisine": "Biryani, North Indian",
            "rating": "4.4"
        },
        {
            "id": 2,
            "resName": "KFC Food",
            "cuisine": "Biryani, North Indian",
            "rating": "4.5"
        },
        {
            "id": 3,
            "resName": "Apna Food",
            "cuisine": "Biryani, North Indian",
            "rating": "4.4"
        },
        {
            "id": 4,
            "resName": "Punjabi Food",
            "cuisine": "Biryani, North Indian",
            "rating": "4.5"
        }
    ]

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        RestaurentData = RestaurentData.filter((res) => res.rating >= 4.5)
                    }}>
                    Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
            {
                RestaurentData.map((data) => (
                <RestaurentCard key={data.id} resData={data} />
                ))
            }    
            </div>
        </div>
    )
}

export default Body