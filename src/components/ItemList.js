import { useDispatch } from "react-redux"
import { CARDIMG_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items}) => {
    const dispatch = useDispatch()
    
    const handleCartItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="flex justify-between border-b-2">
                        <div className="py-2  w-9/12">
                            <div className="flex gap-3">
                                <span>{item.card.info.name}</span>
                                <span>Rs. {(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice)/100}</span>
                            </div>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <button className="absolute bg-black text-white p-1 border rounded-lg mx-12" onClick={() => handleCartItem(item)}>Add +</button>
                            <img src={CARDIMG_URL+item.card.info.imageId} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList