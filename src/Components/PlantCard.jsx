import Stock from "./Stock";

function PlantCard({ plant }) {
    if (!plant) {
        return null;
    }

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <div>
                <Stock plant={plant} />
            </div>
        </div>
    );
}

export default PlantCard;