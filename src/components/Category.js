import { useState } from "react"
import ItemList from "./ItemList"

const Category = ({data}) => {
    const [showsItem, setShowsItem] = useState(false)

    const handleItem = () => {
        if (showsItem) {
            setShowsItem(false)
        } else {
            setShowsItem(true)
        }
    }
    return (
        <div className="w-6/12 bg-gray-50 mx-auto shadow-lg p-4 text-left m-4">
            <div className="flex justify-between  cursor-pointer" onClick={handleItem}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showsItem && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default Category