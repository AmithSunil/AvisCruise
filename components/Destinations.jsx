// Destinations.jsx

import React, { useState } from "react"
import Cards from "./Cards"
import Booking from "./Booking"

const Destinations = ({ CardsData }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleSubmit = card => {
    setSelectedCard(card)
  }

  return (
    <>
      <div className="destinations">
        <div className="destinations-card">
          {CardsData &&
            CardsData.map((card, index) => (
              <Cards
                key={index}
                name={card.name}
                image={card.image}
                rating={card.rating}
                desc={card.desc}
                card={card}
                onSelect={handleSubmit}
              />
            ))}
        </div>
      </div>
      <Booking selectedCard={selectedCard} />
    </>
  )
}

export default Destinations
