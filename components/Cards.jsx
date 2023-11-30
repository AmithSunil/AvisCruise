import React, { useState } from "react"
import Image from "next/image"
import { SearchSection } from "."

const Cards = ({ name, image, rating, desc, card, onSelect }) => {
  const handleBookNow = () => {
    onSelect(card)
  }

  return (
    <>
      <div class="card-container">
         <div class="card-image">
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/${image}`}
            width={300}
            height={200}
            objectFit="cover"
            alt="Circular Image"
          />
          <div class="fade"></div>
        </div>

        <div class="card-content">
          <div className="stay">7D/8N</div>
          <h1 class="card-title">{name}</h1>
          <p style={{ fontSize: 15, fontWeight: 400, color: "#888" }}>
            Acommodation | Meals | Visa
          </p>
          <div class="rating">
            {rating} <span>&#9733;</span>{" "}
          </div>
          <p class="card-description">{desc}</p>
          <hr style={{ width: "100%", border: "1px solid #888" }} />
          <div className="price">
            <p style={{ fontSize: 15, fontWeight: 400 }}>
              Starting @ <br />
              <span style={{ fontSize: 35, fontWeight: 600, color: "#111" }}>
                ₹1000
              </span>{" "}
            </p>
            <a href="#booking">
              <button class="contact-button" onClick={handleBookNow}>
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
