import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onSetListings }) {

  function deleteListing(listingToDelete) {
    const updatedListings = listings.filter(listing => {
      if (listing.id === listingToDelete.id) {
        return false
      } else {
        return true
      }
    })
    onSetListings(updatedListings)
  }

  const listingCards = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={deleteListing} />
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
