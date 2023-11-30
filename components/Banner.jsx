import React from "react"
import Searchbar from "./banner/Searchbar"
import styles from "./Banner.module.css"
import Calender from "./banner/Calender"
import Nationality from "./banner/Nationality"
import Adults from "./banner/Adults"
import Swiper  from "./RSwiper"
 
const Banner = (props) => {
  return (
    <div className={styles.ban}>
      <p className={styles.main}> Explore, Experience, and Enjoy!</p>
      <p className={styles.desc}>Discover Your Dream Destinations with Us.</p>

    </div>
  )
}

export default Banner
