import React from "react";
import Select from "react-select";
import styles from "./Searchbar.module.css";
 
const Searchbar = ({locChange,SearchCards}) => {
  const search_cards = SearchCards.map((cards)=>({value:cards,label:cards}));
  return <Select 
          options={search_cards}
          className={styles.search} 
          onChange={locChange}
          placeholder={'Eg: Azerbaijan'}
          />;
};

export default Searchbar;
