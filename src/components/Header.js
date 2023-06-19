import React from "react";
import Search from "./Search";

function Header({ onSetSearch, sorted, onSetSorted }) {
  function handleSort() {
    onSetSorted(!sorted)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSetSearch={onSetSearch} />
      {sorted ? <button onClick={handleSort}>Do Not Sort By Location</button> : <button onClick={handleSort}>Sort By Location</button>}
    </header>
  );
}
 
export default Header;
