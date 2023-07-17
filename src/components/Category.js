import ItemList from "./ItemList"

const Category = ({data}) => {
    return (
        <div className="w-6/12 bg-gray-50 mx-auto shadow-lg p-4 text-left m-3">
            <div className="flex justify-between">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <ItemList items={data.itemCards} />
        </div>
    )
}

export default Category