import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  const matchingListings = listings.filter(listing => {
    if (listing.description.includes(search)) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="app">
      <Header onSetSearch={setSearch} />
      <ListingsContainer listings={matchingListings} onSetListings={setListings} />
    </div>
  );
}

export default App;
