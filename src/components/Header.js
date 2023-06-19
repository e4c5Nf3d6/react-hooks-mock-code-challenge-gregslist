import React from "react";
import Search from "./Search";

function Header({ onSetSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSetSearch={onSetSearch} />
    </header>
  );
}

export default Header;
