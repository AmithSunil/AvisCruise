import React, { useState, useEffect } from "react"
import Cards from "./Cards"

const Destinations = ({ CardsData, handleSubmit, selectedCard }) => {
  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    const sortDataReverse = () => {
      const sortedArray = [...CardsData].sort((a, b) => {
        return b.name.localeCompare(a.name) // For strings
      })
      setSortedData(sortedArray)
    }

    sortDataReverse()
  }, [CardsData])

  return (
    <>
      <div className="destinations">
        <div>
          <h1 className="title">Fix Departure</h1>
          <p className="desc">- Fix your Destination</p>
        </div>
        <div className="destinations-card">
          {sortedData &&
            sortedData.map((card, index) => (
              <Cards
                key={index}
                name={card.name}
                image={card.image}
                rating={card.rating}
                desc={card.desc}
                price={card.price}
                duration={card.duration}
                card={card}
                onSelect={handleSubmit}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default Destinations
