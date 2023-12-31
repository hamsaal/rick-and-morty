const SearchBar = ({ value, onChange }) => {
  return (
    <div className="searchbar-container">
      <p>Search: </p>
      <input
        className="search-input"
        type="text"
        placeholder="Search your character...."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
