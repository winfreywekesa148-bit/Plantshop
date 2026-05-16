import PlantList from "./Component/PlantList";
import SearchBar from "./Component/SearchBar";
import { useState, useEffect } from "react";
import Form from "./Component/Form";

function App() {
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar search={search} onSearch={setSearch} />
      <PlantList plants={filteredPlants} />
      <Form onAddPlant={setPlants} />
    </div>
  );
}
export default App;