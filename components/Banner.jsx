import React from "react"
import Searchbar from "./banner/Searchbar"
import styles from "./Banner.module.css"
import Calender from "./banner/Calender"
import Nationality from "./banner/Nationality"
import Adults from "./banner/Adults"
 
const Banner = () => {
  return (
    <div>
      <p className={styles.main}> Explore, Experience, and Enjoy!</p>
      <p className={styles.desc}>Discover Your Dream Destinations with Us.</p>

      <div className={styles.banner}>
        <Searchbar />
        <Calender />
        <Nationality />
        <Adults />
 
       </div>
    </div>
  )
}

export default Banner
