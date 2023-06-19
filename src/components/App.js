import React, {useState, useEffect} from "react";
import Header from "./Header";
import Form from "./Form";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function addListing(listing) {
    setListings([
      ...listings,
      listing
    ])
  }

  const matchingListings = listings.filter(listing => {
    if (listing.description.includes(search)) {
      return true
    } else {
      return false
    }
  })

  const listingsToDisplay = [...listings].sort(function (a, b) {
    if (a.location < b.location) {
      return -1;
    }
    if (a.location > b.location) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="app">
      <Header onSetSearch={setSearch} sorted={sorted} onSetSorted={setSorted} />
      <Form onAddListing={addListing} />
      <ListingsContainer listings={sorted ? listingsToDisplay : matchingListings} onSetListings={setListings} />
    </div>
  );
}

export default App;
