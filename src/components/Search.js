import React, { useState } from "react";

function Search({ onSetSearch }) {
  const [searchData, setSearchData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    
    onSetSearch(searchData)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
