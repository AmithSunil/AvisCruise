import React from "react";
import Select from "react-select";
import styles from "./Searchbar.module.css";
import { useState } from "react";

const options = [
  { value: "finland", label: "finland" },
  { value: "india", label: "india" },
  { value: "vanilla", label: "Vanilla" },
];

const Searchbar = ({locChange}) => {

  return <Select 
          options={options}
          className={styles.search} 
          onChange={locChange}
          placeholder={'Eg: Azerbaijan'}
          />;
};

export default Searchbar;
