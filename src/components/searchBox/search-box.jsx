import "./search-box.styles.css";

const SearchBox = ({ onSearchChange }) => (
  <div>
    {console.log(onSearchChange)}
    <input
      className="monsters-search-box"
      type="search"
      placeholder="search monster..."
      onChange={onSearchChange}
    ></input>
  </div>
);

export default SearchBox;
