import React, { useState } from "react";

function Form({ onAddListing }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("http://localhost:6001/listings", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => onAddListing(data))
    }

    return (
        <div className="form-container">
            <h2>Create a New Listing</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Description: </label>
                <input 
                    id="description" 
                    type="text" 
                    placeholder="Item Description"
                    value={formData.description}
                    onChange={handleChange}
                /><br/>
                <label htmlFor="location">Location: </label>
                <input 
                    id="location" 
                    type="text" 
                    placeholder="Item Location"
                    value={formData.location}
                    onChange={handleChange}
                /><br/>
                <label htmlFor="image">Image: </label>
                <input 
                    id="image" 
                    type="text" 
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                /><br/>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}

export default Form