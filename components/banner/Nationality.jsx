import styles from './Searchbar.module.css';
const options = [
  { value: 'United States', label: 'United States' },
  { value: 'China', label: 'China' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Germany', label: 'Germany' },
  { value: 'India', label: 'India' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'France', label: 'France' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Canada', label: 'Canada' },
  { value: 'South Korea', label: 'South Korea' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Mexico', label: 'Mexico' },
  { value: 'Indonesia', label: 'Indonesia' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
  { value: 'Switzerland', label: 'Switzerland' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Iran', label: 'Iran' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Norway', label: 'Norway' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'South Africa', label: 'South Africa' }
  // Add the rest of the countries in the same format...
];
      
      import React from 'react'
      import Select from 'react-select'      
 
      const Nationality = ({natChange}) => {
        
        return(
        <Select options={options} className={styles.search} onChange={natChange} placeholder={'Nationality'}/>
      )};
      
      export default Nationality;