import { CARDIMG_URL } from "../utils/constants"

const ItemList = ({items}) => {
    console.log("IIII", items)
    return (
        <div>
            {
                items.map((item) => (
                    <div className="flex justify-between border-b-2">
                        <div key={item.card.info.id} className="py-2  w-9/12">
                            <div className="flex gap-3">
                                <span>{item.card.info.name}</span>
                                <span>Rs. {(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice)/100}</span>
                            </div>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <img src={CARDIMG_URL+item.card.info.imageId} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList