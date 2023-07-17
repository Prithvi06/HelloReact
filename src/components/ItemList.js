const ItemList = ({items}) => {
    console.log("IIII", items)
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-4 border-b-2">
                        <div className="flex gap-3">
                            <span>{item.card.info.name}</span>
                            <span>Rs. {(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice)/100}</span>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList