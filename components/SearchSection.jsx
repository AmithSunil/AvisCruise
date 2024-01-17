import React, { useState, useEffect } from "react"
import Searchbar from "./banner/Searchbar"
import Nationality from "./banner/Nationality"
import styles from "./SearchSection.module.css"
import Calender from "./banner/Calender"
import Adults from "./banner/Adults"

const SearchSection = ({
  location,
  nationality,
  buttonClicked,
  SearchCards,
}) => {
  const handleloc = event => {
    location(event)
  }

  const handlenat = event => {
    nationality(event)
    // changeNat(nationality);
  }

  return (
    <div className={styles.dummy}>
      <div className={styles.main}>
        <h4 className={styles.search}>Where are you going?</h4>
        <Searchbar locChange={handleloc} SearchCards={SearchCards} />
        <h4>Where are you from</h4>
        <Nationality natChange={handlenat} />
        <h4>When are you travelling?</h4>
        <Calender />
        <Adults />
        <a href="#destinations">
          <button
            className="contact-button"
            href="destinations"
            onClick={buttonClicked}
          >
            Book Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default SearchSection
