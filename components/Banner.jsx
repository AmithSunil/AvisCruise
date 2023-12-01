import React from "react"
import Searchbar from "./banner/Searchbar"
import styles from "./Banner.module.css"
import Calender from "./banner/Calender"
import Nationality from "./banner/Nationality"
import Adults from "./banner/Adults"
import Swiper from "./RSwiper"

const Banner = () => {
  return (
    <div className={styles.ban}>
      <div className={styles.banner}>
        {/* <Searchbar />
        <Calender />
        <Nationality />
        <Adults />
  */}
      </div>
    </div>
  )
}

export default Banner
