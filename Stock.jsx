function Stock({ plants, stock, onToggleStock }) {
    return (
        <div>
          <button
           className={plants.oust ? "out-of-stock" : "in-stock"}
           onClick={() => onToggleStock(plants)}
           >
            {plants.oust ? "Out of Stock" : "In Stock"}
          </button>
        </div>
    )
}

export default Stock;