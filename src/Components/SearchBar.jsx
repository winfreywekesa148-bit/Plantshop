function SearchBar({ search, onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for plants..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;