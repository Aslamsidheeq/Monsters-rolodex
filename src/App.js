import { useEffect, useState } from "react";
import "./styles.css";
import CardList from "./components/cardList/card-list.component";
import SearchBox from "./components/searchBox/search-box";

export default function App() {
  const [searchFeild, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFeild]);

  const onSearchChange = (event) => {
    const searchFeildString = event.target.value.toLowerCase();
    setSearchFeild(searchFeildString);
  };
  return (
    <div className="App">
      <SearchBox onSearchChange={onSearchChange} />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
}
