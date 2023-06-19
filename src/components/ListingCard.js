import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isActive, setIsActive] = useState(false)

  function handleFavorite() {
    setIsActive(!isActive)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, { method: 'DELETE'})
    .then(r => r.json())
    .then(data => onDeleteListing(data))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isActive ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
