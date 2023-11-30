import React, { useState, useEffect } from 'react';
import Searchbar from './banner/Searchbar';
import Nationality from './banner/Nationality';
import styles from './SearchSection.module.css';

const SearchSection = ({location,nationality,buttonClicked}) => {

  const handleloc = (event) => {
      location(event);

};

const handlenat = (event) => {
    nationality(event);
    // changeNat(nationality);
  };


  return (
    <div className={styles.dummy}>
      <div className={styles.main}>
        <h4 className={styles.search}>Where are you going?</h4>
        <Searchbar locChange={handleloc} />
        <h4>Where are you from</h4>
        <Nationality natChange={handlenat} />
        <button className="contact-button" href="destinations" onClick={buttonClicked}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
